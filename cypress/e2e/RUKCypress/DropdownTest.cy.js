describe('Dropdown Demo', ()=>{

    it('Dropdown', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country').should('have.value', 'japan');
    

    })


    it.only('Dummy Ticket Website', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-reasondummy-container').click();

        cy.get('[class="select2-search select2-search--dropdown"]').type('Visa{enter}');

        cy.get('#select2-reasondummy-container');

    })
})