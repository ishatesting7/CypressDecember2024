describe('ViewPort', ()=>{

    it('ViewPort-IPHONE',()=>{

        cy.viewport('iphone-se2');

        cy.visit('https://formstone.it/')


        cy.get('.header_handle').click();

        cy.contains('Getting Started').click();
    })

    it('ViewPort-IPAD',()=>{

        cy.viewport('ipad-mini');

        cy.visit('https://formstone.it/')

        cy.get('.header_handle').click();

        cy.contains('Getting Started').click();
        
    })

    it('ViewPort-1024 and 768',()=>{

        cy.viewport(1024, 768)


        cy.visit('https://formstone.it/')


        cy.contains('Getting Started').click();
        
    })

})