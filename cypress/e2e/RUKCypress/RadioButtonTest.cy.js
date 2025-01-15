describe('RadioButton', ()=>{

    it('Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#male').should('be.visible');

        cy.get("#male").click();

        cy.get("#male").should('be.checked');

        cy.get('#female').should('be.visible');

        cy.get("#female").click();

        cy.get("#female").should('be.checked');

    })


    it('Checkboxes', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#sunday').should('be.visible');

        cy.get('#sunday').should('not.be.checked');

        cy.get('#sunday').check();

        cy.get('#sunday').should('be.checked');

        cy.get('[type="checkbox"]').check();

        cy.get('[type="checkbox"]').uncheck();
        
    })
})