describe('SauceDemo - Intercept Network Requests', () => {
    it('should intercept and validate network requests', () => {
        // Intercept the login request
        cy.intercept('POST', '**/api/auth/login').as('loginRequest');

        // Visit the SauceDemo login page
        cy.visit('https://www.saucedemo.com/');

        // Perform login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // Wait for the login request to complete and validate it
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body).to.have.property('token');
        });

        // Intercept the inventory request
        cy.intercept('GET', '**/api/inventory').as('inventoryRequest');

        // Visit the inventory page
        cy.visit('https://www.saucedemo.com/inventory.html');

        // Wait for the inventory request to complete and validate it
        cy.wait('@inventoryRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body).to.have.length.greaterThan(0);
        });
    });
});