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
    const createdAt = responseBody.listBuilder3Service.variants[0].created_at.substring(0, 10);
    const updatedAt = responseBody.listBuilder3Service.variants[0].updated_at.substring(0, 10);

    expect(createdAt).to.match(/^\d{4}-\d{2}-\d{2}$/); // Validate date format
    expect(updatedAt).to.match(/^\d{4}-\d{2}-\d{2}$/); // Validate date format
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
    const createdAt = new Date(responseBody.listBuilder3Service.variants[0].created_at);
    const updatedAt = new Date(responseBody.listBuilder3Service.variants[0].updated_at);

    const timeDifference = updatedAt - createdAt;

    cy.log(`Time Difference in milliseconds: ${timeDifference}`);
    expect(timeDifference).to.be.a('number').and.to.be.greaterThan(0);
  });
});
