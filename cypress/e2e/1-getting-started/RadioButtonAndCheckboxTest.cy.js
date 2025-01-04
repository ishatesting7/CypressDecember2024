describe('Radio Button and CheckBox', ()=>{

    it('Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#male').should('be.visible')

        cy.get('#male').click();

        cy.wait(2000);

        cy.get('#female').should('be.visible')

        cy.get('#female').click();

        cy.get('#female').should('be.checked');

        cy.get('#male').should('not.be.checked');

    })

    it.only('Check Boxes', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#sunday').should('be.visible').check();

        cy.get('#monday').should('be.visible').check();

        cy.get('#sunday').should('be.checked');

        cy.get('#monday').should('be.checked');

        cy.get('[type="checkbox"]').check();

        cy.get('[type="checkbox"]').uncheck();

        
        
    })
})