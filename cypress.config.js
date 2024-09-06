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
    pageLoadTimeout: 60000,       // Timeout for page loads (1 minute)
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});
