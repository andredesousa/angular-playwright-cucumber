const config = require('./playwright.config');

/**
 * Playwright configuration file, see link for more information:
 * https://playwright.dev/docs/test-configuration
 *
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
module.exports = {
  ...config,
  webServer: null,
  workers: 1,
  use: {
    ...config.use,
    headless: false,
    launchOptions: {
      slowMo: 100,
    },
  },
};
