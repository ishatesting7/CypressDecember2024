describe('Cypress Automation - Basic Commands - 1', ()=>{

    it('Cypress Commands - IT 1', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('equal','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  
    })

    it('Cypress Commands - IT 2', function(){
        cy.visit('https://demo3x.opencartreports.com/admin/')
        cy.title().should('eq','Administration')
    })
})

describe('Cypress Automation - Basic Commands - 2', ()=>{

    it('Cypress Commands - IT - 3', function(){

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.screenshot();
        
    })

    
})