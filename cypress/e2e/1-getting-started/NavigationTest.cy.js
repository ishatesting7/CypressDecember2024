describe('Navigation Commands', ()=>{

    it('Navigation', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.visit('https://www.google.com')

        cy.go('back');

        cy.go('forward');

        cy.go(-1);

        cy.go(1);

        cy.url().should('eq','https://www.google.com/');

        cy.go('back')

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        
    })
})