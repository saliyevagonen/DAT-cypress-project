/* 
  TC-02 Navigation & Assertion:
      1. Redirect from the main page to the 'Products' page.
      2. Navigate to the 'Load Boards' section.
      3. Go to the 'Loard Board Plans' page.
      4. Find the 'Combo' options.
    Assert that 'DAT One Select Broker/Carrier' 
      has its former name as 'Power Select Broker/Carrier'.
*/

import {
  navBar,
  loadBoardPlans,
  products,
  comboPlan,
} from "../../support/locators";

import * as constants from "../../support/constants";

describe("DAT UI Tests - Navigation And Assertion", () => {
  // Before each test navigate to DAT.com
  beforeEach(() => {
    cy.visit("/");
  });

  // Adding one retry due to potential flakiness in the test
  it(`TC-02: Should navigate to Products >> Load Boards >> Load Board Plans page and 
            assert that the DAT One Select Broker/Carrier has its former name as 
            'Power Select Broker/Carrier `, { retries: 1 }, () => {
    // Hover over the 'Products' dropdown
    cy.get(navBar.productsDropdown).contains("Products").trigger("mouseover");

    // Click on the Load Board link
    cy.get(products.loadBoardLink)
      .contains(constants.LOAD_BOARD)
      .click({ force: true });

    // Verify that the URL includes '/load-boards
    cy.url().should("include", "/load-boards");

    // Get Combo tab and click on it
    cy.get(loadBoardPlans.comboTab)
      .scrollIntoView()
      .contains(constants.LOAD_BOARD_PLANS_COMBO)
      .click();
        
    cy.get(comboPlan.tableOneTitle)
      .should("be.visible")
      .and("contain", "DAT One")
      .and("contain", "Select Broker/Carrier")
      .find("p")
      .should("have.text", "Formerly Power Select Broker/Carrier");
  });
});
