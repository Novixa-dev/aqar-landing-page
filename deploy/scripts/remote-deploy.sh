#!/usr/bin/env bash
# Zero-touch rollout executed on the VPS by the Deploy workflow.
#   remote-deploy.sh <image> <tag>
# First run bootstraps /opt/aqar-landing (.env, data dir, TLS copy) additively.
# Pulls the image, restarts the stack, waits for the container health check and
# automatically rolls back to the previous tag if the new release is unhealthy.
# It never restarts mailcow or touches the other sites on this VPS.
set -euo pipefail

IMAGE="${1:?usage: remote-deploy.sh <image> <tag>}"
TAG="${2:?usage: remote-deploy.sh <image> <tag>}"
APP_DIR="${APP_DIR:-/opt/aqar-landing}"
CONTAINER="aqar-landing-app"
HEALTH_TIMEOUT="${HEALTH_TIMEOUT:-180}"
EDGE_NET="aqar-edge"                   # already shared with mailcow's nginx
NG_DIR="/opt/mailcow-dockerized/data/conf/nginx"
SITE_SRC="$APP_DIR/nginx/aqar-landing.mailcow.conf"
SITE_CONF="${SITE_CONF:-$NG_DIR/aqar-landing.conf}"
APP_UID=1000 # "node" user inside the image

cd "$APP_DIR"

# ---- one-time bootstrap (idempotent) ---------------------------------------
install -d -m 750 -o "$APP_UID" -g "$APP_UID" "$APP_DIR/data"
if [ ! -f .env ]; then
  cat > .env <<EOF
# Aqar landing production configuration — keep private (chmod 600).
# Fill RESEND_API_KEY or SMTP_* to enable lead emails, then redeploy.
NEXT_PUBLIC_SITE_URL=https://aqar-landing-page.novixa.dev
NOVIXA_CONTACT_EMAIL=hello@novixa.dev
CONTACT_TO_EMAIL=hello@novixa.dev
CONTACT_FROM_EMAIL=Novixa Aqar <no-reply@novixa.dev>
RESEND_API_KEY=
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
LEAD_WEBHOOK_URL=
APP_PORT=3077
APP_IMAGE=$IMAGE
APP_TAG=latest
EOF
  echo "✔ .env created at $APP_DIR/.env"
fi
chmod 600 .env

# Cloudflare origin certificate (*.novixa.dev): this site's own copy.
if [ ! -f "$NG_DIR/aqar-landing/origin.pem" ]; then
  src=""
  for d in aqar-demo pizza-house; do
    [ -f "$NG_DIR/$d/origin.pem" ] && [ -f "$NG_DIR/$d/origin.key" ] && { src="$NG_DIR/$d"; break; }
  done
  if [ -n "$src" ]; then
    install -d -m 750 "$NG_DIR/aqar-landing"
    install -m 600 "$src/origin.pem" "$NG_DIR/aqar-landing/origin.pem"
    install -m 600 "$src/origin.key" "$NG_DIR/aqar-landing/origin.key"
    echo "✔ TLS origin certificate copied from $src"
  else
    echo "::warning::No *.novixa.dev origin certificate found — put origin.pem/origin.key in $NG_DIR/aqar-landing/"
  fi
fi

set_kv() { # set_kv KEY VALUE  (in .env, which compose also uses for ${VAR} interpolation)
  if grep -q "^$1=" .env; then sed -i "s#^$1=.*#$1=$2#" .env; else printf '%s=%s\n' "$1" "$2" >> .env; fi
}

wait_healthy() {
  local waited=0 status
  while [ "$waited" -lt "$HEALTH_TIMEOUT" ]; do
    status="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$CONTAINER" 2>/dev/null || echo missing)"
    case "$status" in
      healthy) return 0 ;;
      unhealthy|exited|dead|missing) [ "$waited" -gt 20 ] && return 1 ;;
    esac
    sleep 5; waited=$((waited + 5))
  done
  return 1
}

nginx_ctr() { docker ps -q --filter label=com.docker.compose.service=nginx-mailcow | head -n1; }

# Install the site block only when it changed; nginx -t first, previous file restored on failure.
sync_site() {
  [ -f "$SITE_SRC" ] || return 0
  [ -f "$NG_DIR/aqar-landing/origin.pem" ] || { echo "::warning::TLS certificate missing — site block not installed"; return 0; }
  cmp -s "$SITE_SRC" "$SITE_CONF" 2>/dev/null && return 0
  local ctr prev; ctr="$(nginx_ctr)"
  [ -n "$ctr" ] || { echo "::warning::mailcow nginx is not running — site block not installed"; return 0; }
  prev="$(mktemp)"; [ -f "$SITE_CONF" ] && cp "$SITE_CONF" "$prev"
  cat "$SITE_SRC" > "$SITE_CONF"
  if docker exec "$ctr" nginx -t >/dev/null 2>&1; then
    docker exec "$ctr" nginx -s reload >/dev/null && echo "✔ nginx site updated and reloaded"
  else
    docker exec "$ctr" nginx -t 2>&1 | tail -5 || true
    if [ -s "$prev" ]; then cat "$prev" > "$SITE_CONF"; else rm -f "$SITE_CONF"; fi
    echo "::error::nginx -t rejected the new site block — previous file restored, nginx untouched"
    rm -f "$prev"; return 1
  fi
  rm -f "$prev"
}

# The edge network already exists for the aqar demos; make sure nginx is on it (no restart).
docker network inspect "$EDGE_NET" >/dev/null 2>&1 || docker network create "$EDGE_NET" >/dev/null
NGINX_CTR="$(nginx_ctr)"
if [ -n "$NGINX_CTR" ] && ! docker inspect -f '{{json .NetworkSettings.Networks}}' "$NGINX_CTR" | grep -q "\"$EDGE_NET\""; then
  docker network connect "$EDGE_NET" "$NGINX_CTR" && echo "✔ mailcow nginx joined $EDGE_NET"
fi

# ---- rollout ---------------------------------------------------------------
PREV_TAG="$(grep -E '^APP_TAG=' .env | cut -d= -f2- || true)"
echo "▶ Deploying $IMAGE:$TAG (previous: ${PREV_TAG:-none})"

if [ -n "${GHCR_TOKEN:-}" ]; then
  echo "$GHCR_TOKEN" | docker login ghcr.io -u "${GHCR_USER:-github}" --password-stdin >/dev/null
  trap 'docker logout ghcr.io >/dev/null 2>&1 || true' EXIT
fi

set_kv APP_IMAGE "$IMAGE"
set_kv APP_TAG "$TAG"
docker compose pull app
docker compose up -d --remove-orphans app

if wait_healthy; then
  echo "✅ $CONTAINER is healthy on $TAG"
  sync_site
else
  echo "::error::$TAG failed its health check — recent logs:"
  docker compose logs --tail=80 app || true
  if [ -n "$PREV_TAG" ] && [ "$PREV_TAG" != "$TAG" ] && [ "$PREV_TAG" != "latest" ]; then
    echo "↩ Rolling back to $PREV_TAG"
    set_kv APP_TAG "$PREV_TAG"
    docker compose up -d app
    wait_healthy && echo "↩ Rollback to $PREV_TAG is healthy" || echo "::error::Rollback is unhealthy too"
  fi
  exit 1
fi

# Keep the current and previous releases for instant rollback; drop older ones.
docker images "$IMAGE" --format '{{.Tag}}' \
  | grep -vxE "$TAG|${PREV_TAG:-__none__}|latest|<none>" \
  | xargs -r -I{} docker rmi "$IMAGE:{}" >/dev/null 2>&1 || true
docker image prune -f >/dev/null 2>&1 || true
