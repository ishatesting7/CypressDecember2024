describe('Hooks in Cypress', ()=>{


    before('demo',()=>{
        cy.log('BEFORE - AT THE VERY START');

    })
    
    after(()=>{
        cy.log('AFTER - ALL THE TEST CASE HAS RAN');
    })

    beforeEach(()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.log("Before Each Test Cases");
    })

    afterEach(()=>{
        cy.log('After Each Test Cases');
    })

    it('Hooks ', ()=>{

    cy.log('I am in IT Block - 1')

    })

    it('Hooks ', ()=>{

        cy.log('I am in IT Block - 2')
    })

    it('Hooks ', ()=>{

        cy.log('I am in IT Block - 3')
    })
})