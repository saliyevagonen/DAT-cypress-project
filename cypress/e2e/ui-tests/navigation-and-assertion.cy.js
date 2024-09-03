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
  
  describe("DAT UI Tests - Navigation And Assertion", () => {
    // Before each test navigate to DAT.com
    beforeEach(() => {
      cy.visit("/");
    });
  
    it(`TC-02: Should navigate to Products >> Load Boards >> Load Board Plans page and 
            assert that the DAT One Select Broker/Carrier has its former name as 
            'Power Select Broker/Carrier `, () => {
      
      // Hover over the 'Products' dropdown
      cy.get(navBar.productsDropdown)
        .contains('Products')
        .trigger("mouseover");
  
      // Click on the Load Board link
      cy.get(products.loadBoardLink)
        .contains('Load Board')
        .click({ force: true });
  
      /*
        Verify the url 
        Scroll into the Plans and Pricing section
        Verify the header
      */ 
      cy.url().should("include", "/load-boards");
      cy.get(loadBoardPlans.plansAndPricingSection)
        .scrollIntoView()
        .contains('Load board plans');
  
      /*
       Click on the Combo tab
      */ 
      cy.get(loadBoardPlans.comboTab)
        .contains('Combo')
        .click();
  
      // Verify that the 'DAT One Select Broker/Carrier' contains "Formerly Power Select Broker/Carrier"
      cy.get(comboPlan.tableOneTitle)
        .should("contain", "DAT One")
        .and("contain", "Select Broker/Carrier")
        .find("p")
        .should("have.text", "Formerly Power Select Broker/Carrier");
    });
  });        