describe('ViewPort Command', ()=>{

    it('Ipad Mini', ()=>{

        cy.viewport('ipad-mini');
        cy.visit('https://blazedemo.com/');

    })

    it('Mac', ()=>{

        cy.viewport('macbook-16');
        cy.visit('https://blazedemo.com/');
    })

    it('Mac', ()=>{

        cy.viewport('iphone-xr');
        cy.visit('https://blazedemo.com/');
    })

    it('550 by 750', ()=>{

        cy.viewport(550, 750)
        cy.visit('https://blazedemo.com/')
    })

    it('This is taking the value from Config file', ()=>{
        cy.visit('https://blazedemo.com/');
        
    })
})