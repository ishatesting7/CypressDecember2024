describe('Radio Button and Checkbox Demo', ()=>{

    it("Radio Button and Checkbox", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#male').click();

        cy.get('#male').should('be.checked');

        cy.get('#female').click();

        cy.get('#female').should('be.checked');



    })


    it.only("Checkbox", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#sunday').check().wait(1000).should('be.checked');

        cy.get('#monday').check().wait(1000).should('be.checked');

        cy.get('[type="checkbox"]').check();

        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');

        cy.get('[type="checkbox"').should('have.length.above',11).should('have.length',12).should('have.length.at.least',11);

        
        //cy.get()
    })
})