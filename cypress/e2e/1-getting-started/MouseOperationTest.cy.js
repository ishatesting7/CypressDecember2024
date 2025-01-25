describe('Mouse Operation', ()=>{

    it('Mouse Over', ()=>{

        cy.visit('https://demo.opencart.com/')

        cy.get('[href="https://demo.opencart.com/en-gb/catalog/laptop-notebook/windows"').should('not.be.visible');

        cy.get('[href="https://demo.opencart.com/en-gb/catalog/laptop-notebook/windows"').trigger('mouseover').click();
        // ;
    })

    it('Double Click Event', ()=>{

        cy.visit('https://qa-practice.netlify.app/double-click')

        cy.get('[type="submit"]').trigger('dblclick');

        //cy.get('[type="submit"]').dblclick();
        
    })

    it('Right Click Event', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');

    })

    it.only('Drag and Drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

        cy.get('#box1',{force: true}).drag('#box106',{force: true});
    })


    it('Cypress Scroll ', ()=>{

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
       // cy.get('.context-menu-one.btn.btn-neutral').rightclick();
    /*
    Double Click
    Right Click
    Drag and Drop
    Scrolling
    */


    it.only('ScrollTo', ()=>{
        cy.visit('https://example.cypress.io/commands/actions')

        cy.scrollTo('bottom')

cy.get('#scrollable-horizontal').scrollTo('right')

// or you can scroll to a specific coordinate:
// (x axis, y axis) in pixels
cy.get('#scrollable-vertical').scrollTo(250, 250)

// or you can scroll to a specific percentage
// of the (width, height) of the element
cy.get('#scrollable-both').scrollTo('75%', '25%')

// control the easing of the scroll (default is 'swing')
cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

// control the duration of the scroll (in ms)
cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
    })
})