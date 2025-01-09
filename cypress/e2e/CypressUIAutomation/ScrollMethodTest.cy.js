describe('Scroll Method', ()=>{

    it('Scroll Demo', ()=>{

        cy.visit('https://example.cypress.io/commands/actions')

        cy.scrollTo('bottom');

        cy.get('#scrollable-horizontal').scrollTo('right');

        cy.get('#scrollable-horizontal').scrollTo('center');

        cy.get('#scrollable-vertical').scrollTo(250, 250);

        cy.get('#scrollable-both').scrollTo('75%', '25%');

        cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })

    })

    it.only('Scroll Into View', ()=>{


        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('#scroll-horizontal button')
  .should('not.be.visible')

// scroll the button into view, as if the user had scrolled
cy.get('#scroll-horizontal button').scrollIntoView()
cy.get('#scroll-horizontal button')
  .should('be.visible')

cy.get('#scroll-vertical button')
  .should('not.be.visible')

// Cypress handles the scroll direction needed
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
  .should('be.visible')

cy.get('#scroll-both button')
  .should('not.be.visible')

// Cypress knows to scroll to the right and down
cy.get('#scroll-both button').scrollIntoView()
cy.get('#scroll-both button')
  .should('be.visible')
    })


    it.only('Scroll', ()=>{

        cy.visit('https://scroll.in/');

        cy.scrollTo('center', {duration:8000});

        cy.get('[href="https://scroll.in/reel/1077689/dracula-in-india-how-filmmakers-localised-and-tamed-the-vampire"]').click({multiple:true});
        
    })

})