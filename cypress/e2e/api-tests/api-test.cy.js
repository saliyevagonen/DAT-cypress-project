describe('DAT API Tests', () => {
  let responseBody;

  beforeEach(() => {
    // Intercept the POST request and visit the website
    cy.intercept('POST', 'https://sumome.com/services').as('postRequest');
    cy.visit('https://bdow.com/');

    // Wait for the POST request and store the response
    cy.wait('@postRequest').then((interception) => {
      responseBody = interception.response.body;
    });
  });

  it('Scenario 1: API Call and Response Validation', () => {
    // Use the stored response data for validation
    // The substring(0, 10) is used to limit the date format to YYYY-MM-DD
    const createdAt = responseBody.listBuilder3Service.variants[0].created_at.substring(0, 10);
    const updatedAt = responseBody.listBuilder3Service.variants[0].updated_at.substring(0, 10);

     /*
    Check if the extracted createdAt and updatedAt strings 
    match the regular expression /^\d{4}-\d{2}-\d{2}$/, 
    which represents the YYYY-MM-DD date format.
    */ 
    expect(createdAt).to.match(/^\d{4}-\d{2}-\d{2}$/);
    expect(updatedAt).to.match(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('Scenario 2: Display Rules Extraction', () => {
    // Use the stored response data to extract display rules
    const variants = responseBody.listBuilder3Service.variants;

    variants.forEach((variant) => {
      const displayRules = variant.display_rules;

      if (displayRules && displayRules.length > 0) {
        displayRules.forEach((rule) => {
          cy.log(
            `ID: ${rule.id}, Site ID: ${rule.site_id}, App ID: ${rule.app_id}, Object ID: ${rule.object_id}, Group ID: ${rule.group_id || 'null'}`
          );
        });
      } else {
        cy.log('No display rules found for variant ID: ' + variant.id);
      }
    });
  });

  it('Scenario 3: Time Difference Calculation', () => {
    // Use the stored response data to calculate the time difference
    // Convert the created_at and updated_at fields from strings into JavaScript Date objects using new Date().
    const createdAt = new Date(responseBody.listBuilder3Service.variants[0].created_at);
    const updatedAt = new Date(responseBody.listBuilder3Service.variants[0].updated_at);
    
    // Calculate the time difference between the two dates in milliseconds by subtracting createdAt from updatedAt.
    const timeDifference = updatedAt - createdAt;

    cy.log(`Time Difference in milliseconds: ${timeDifference}`);
    expect(timeDifference).to.be.a('number').and.to.be.greaterThan(0);
  });
});
