/* TC-01 Page Navigation:
      1. Visit the website DAT.com.
    Asert that the correct page is opened.
*/

import { homePage } from "../../support/locators";

describe("DAT UI Tests", () => {
  // Before each test navigate to DAT.com
  beforeEach(() => {
    cy.visit('/');
  });

  it("TC-01: Should navigate to the DAT.com homepage and assert that the correct page is opened", () => {
    // Verify that the current URL is exactly 'https://www.dat.com/'
    cy.url().should("eq", Cypress.config('baseUrl'));

    // Verify the logo is visible
    cy.get(homePage.pageLogo).should("be.visible");

    // Verify critical elements
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
  });
}); 