# Novixa Aqar — Professional Landing Page Pack

**Purpose:** A research-informed, implementation-ready specification for building a high-quality B2B marketing landing page for Novixa Aqar, with Arabic-first RTL and English LTR support.

## Start here

1. `01_PRODUCT_BRIEF_AND_MESSAGES.md` — product facts, current business model, target customers, demos, and outreach messages.
2. `02_LIVE_SITE_AUDIT_AND_STRATEGY.md` — research snapshot of the five supplied URLs, current positioning problems, and the recommended architecture.
3. `03_PRD_AQAR_B2B_LANDING_PAGE.md` — definitive product requirements and acceptance criteria.
4. `04_READY_TO_USE_COPY_AR_EN.md` — draft landing-page copy in Arabic and English.
5. `05_TECHNICAL_SEO_ACCESSIBILITY_PERFORMANCE.md` — implementation requirements for clean code, metadata, SEO, OG, performance, accessibility, and analytics.
6. `06_AI_IMPLEMENTATION_PROMPT.md` — paste into Claude Code, Codex, Antigravity, or a similar coding agent after opening the actual project repository.
7. `07_QA_RELEASE_CHECKLIST.md` — test matrix and definition of done.
8. `08_FUTURE_AFFILIATE_PROGRAM_SPEC.md` — separate future proposal for affiliate registration, links, tiers, referrals, sub-affiliates, and payouts. It is not part of the landing-page MVP.
9. `09_RESEARCH_REFERENCES.md` — official implementation references and competitor patterns.

## Important product-positioning decision

Aqar has two user journeys that should not be conflated:

- **B2B software acquisition:** a real-estate office wants a configurable software licence and branded deployment. This is the main goal of the landing page specified here.
- **B2C property discovery:** buyers and renters want to search listings. This belongs in the public property experience or product demo and can be linked from the marketing page as a secondary path.

The current Vercel pages lean toward B2C property discovery. Keep that experience if it is useful, but create a dedicated B2B page/route rather than making visitors infer that Aqar is licensable real-estate software.

## Evidence labels used in this pack

- **Provided / observed:** stated in the supplied product notes or visible in the public text of a supplied website.
- **Recommendation:** professional implementation advice.
- **Verify before claiming:** requires code, operational, legal, or browser verification before it may be presented as a factual promise.
- **Future scope:** intentionally not required for the first landing-page release.

## How to use the AI prompt

Open the real repository (not an empty unrelated folder), add this pack to a `/docs/aqar-landing/` directory or keep it at the project root, and give the agent `06_AI_IMPLEMENTATION_PROMPT.md`. Require the agent to inspect the actual stack and existing features before coding. The prompt explicitly forbids silently switching frameworks, inventing capabilities, or declaring production readiness without browser QA.

## Production caution

The links in this pack are the links supplied or observed during research. Before release, select one canonical marketing URL on an owned/controlled domain, fix all old/staging/example links, and validate live links. Do not publish shared demo credentials, private data, fake metrics, fake testimonials, or sample records as real evidence.
