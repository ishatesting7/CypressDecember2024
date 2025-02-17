describe('OrangeHRM - Intercept Network Requests', () => {
    it('should intercept and validate network requests after login', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Perform login
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

       

        // Intercept the API requests that load on the home page
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary').as('action-summary');

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('dashboardRequest');

        cy.intercept("GET",'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit');
      
        // Validate the intercepted requests
        cy.wait('@action-summary').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            const str = JSON.stringify(interception.response.body);
            cy.log(str);
        });

        cy.wait('@subunit').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        });

        cy.wait('@dashboardRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);

        });
    });
});