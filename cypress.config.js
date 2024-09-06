const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.dat.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    viewportWidth: 890,
    viewportHeight: 600,
    defaultCommandTimeout: 10000, // Timeout for commands (10 seconds)
    requestTimeout: 15000,        // Timeout for API requests (15 seconds)
    pageLoadTimeout: 30000,       // Timeout for page loads (30 seconds)
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});
