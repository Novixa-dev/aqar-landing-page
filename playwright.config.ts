import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.E2E_PORT ?? 3200);
const baseURL = `http://127.0.0.1:${PORT}`;

function resolveChromium(): string | undefined {
  const explicit = process.env.PLAYWRIGHT_CHROMIUM_PATH;
  if (explicit && existsSync(explicit)) return explicit;

  const provisioned = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (provisioned) {
    const candidate = join(provisioned, 'chromium');
    if (existsSync(candidate)) return candidate;
  }

  // Check ~/.cache/ms-playwright for any installed chromium revision
  const cacheDir = join(homedir(), '.cache', 'ms-playwright');
  if (existsSync(cacheDir)) {
    try {
      const entries = readdirSync(cacheDir).sort().reverse();
      for (const entry of entries) {
        if (entry.startsWith('chromium-')) {
          for (const sub of [
            join(cacheDir, entry, 'chrome-linux', 'chrome'),
            join(cacheDir, entry, 'chrome-linux64', 'chrome'),
          ]) {
            if (existsSync(sub)) return sub;
          }
        }
      }
    } catch {
      // Ignore directory read errors
    }
  }

  // Check standard Linux system browser paths
  const systemPaths = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ];
  for (const sysPath of systemPaths) {
    if (existsSync(sysPath)) return sysPath;
  }

  return undefined;
}

const executablePath = resolveChromium();

export default defineConfig({
  testDir: './e2e',
  retries: 0,
  workers: 1,
  reporter: [['list']],
  timeout: 45_000,
  expect: { timeout: 10_000 },

  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: executablePath ? { executablePath } : {},
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],

  webServer: {
    command: `npx next start --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
    env: {
      NEXT_PUBLIC_SITE_URL: baseURL,
      LEADS_STORE: 'memory',
    },
  },
});
