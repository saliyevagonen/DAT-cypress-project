const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.dat.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    viewportWidth: 890,
    viewportHeight: 600,
    defaultCommandTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});