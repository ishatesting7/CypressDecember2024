describe('Mouse Operation', ()=>{

    it('Mouse Over', ()=>{

        cy.visit('https://demo.opencart.com/')

        cy.get('[href="https://demo.opencart.com/en-gb/catalog/laptop-notebook/windows"').should('not.be.visible');

        cy.get('[href="https://demo.opencart.com/en-gb/catalog/laptop-notebook/windows"').trigger('mouseover').click();
        // ;
    })
})