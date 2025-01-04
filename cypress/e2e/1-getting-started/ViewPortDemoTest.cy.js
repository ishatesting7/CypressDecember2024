describe('Viewport Testing', ()=>{

    it('Viewport Testing', ()=>{

        cy.viewport('iphone-xr')
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    })

    it('Viewport Testing', ()=>{

        cy.viewport('macbook-11')
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        
    })
    it('Viewport Testing', ()=>{

        cy.viewport(360,760)
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        
    })
})