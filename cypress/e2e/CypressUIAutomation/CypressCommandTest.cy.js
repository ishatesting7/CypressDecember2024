describe('Cypress Commands', ()=>{

    let abc = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    
    it('Cypress Command', ()=>{

        cy.visit(abc);

        //Validate the URL - Assertion

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait(5000);

        //cy.pause();

        cy.log('I am running cypress test');

        console.log('I am in console - running cypress test');

        //CSS LOCATOR - GET - Identifying the element over the UI 

        cy.get('.orangehrm-login-branding > img').should('be.visible');

        cy.get('.orangehrm-login-logo > img').should('be.visible');

        cy.get('[name="username"]').type('Admin');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

        cy.get('.oxd-button').click();
    })
})