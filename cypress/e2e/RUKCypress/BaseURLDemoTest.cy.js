describe('Cypress Base URL', ()=>{

    it('Describe Test 1', ()=>{

        cy.visit(Cypress.env('baseUrl'));
    })

    it('Describe Test 2 ', ()=>{

        cy.visit('/')

    })

    it('Describe Test 3 ', ()=>{

        cy.visit('/app/end-to-end-testing/writing-your-first-end-to-end-test')

    })

    
})