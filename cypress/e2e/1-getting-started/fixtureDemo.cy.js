describe('API Test with Fixture Data', () => {
    it('should use fixture data for API request', () => {
        cy.fixture('dataAPI').then((userData) => {
            
            cy.log(userData.id);
            cy.log(userData.firstName);
            cy.log(userData.lastName);
            cy.log(userData.email);   
            cy.log(userData.password);
            cy.log(userData.phone);
            cy.log(userData.address.street);
            cy.log(userData.address.city);
            cy.log(userData.address.state);
            cy.log(userData.address.zip);

            cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
            cy.get('#input-firstname').type(userData.firstName);
            cy.get('#input-lastname').type(userData.lastName);
            cy.get('#input-email').type(userData.email);
            cy.get('#input-telephone').type(userData.phone);
            cy.get('#input-password').type(userData.password);
            cy.get('#input-confirm').type(userData.password);
            cy.get('input[type="checkbox"]').check();
            cy.contains('Continue').click();
           
        });
    });
});


// All the test data which is required for testing it will be present inside fixture folder
// JSON, CSV, EXCEL, TXT
// Cypress is purely supporting JSON
// dataAPI.json  -- Java Single Object Notation
           