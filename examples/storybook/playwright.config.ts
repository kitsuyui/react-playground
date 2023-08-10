import { defineConfig, devices } from '@playwright/test'

// https://playwright.dev/docs/test-configuration
export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,

    // toHaveScreenshot: {
    //   // An acceptable amount of pixels that could be different, unset by default.
    //   maxDiffPixels: 1,
    // },

    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.01,
    },
  },

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:6006',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'pnpm dev',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: !process.env.CI,
  },
})
