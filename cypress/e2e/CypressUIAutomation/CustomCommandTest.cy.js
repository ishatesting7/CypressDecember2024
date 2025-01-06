describe('Custom Command', ()=>{


    it.only('Custom Commands', ()=>{

        cy.loginOrange('Admin','admin123',true);
        cy.validateLocator('.oxd-brand-banner > img');
        cy.containValue('Dashboard');
    
        
    })

    it('Custom Commands', ()=>{

        cy.loginOrange('masterAdmin','admin123',true);
        
    })

    it('Custom Commands', ()=>{

        cy.loginOrange('superAdmin','admin123',true);
        
    })
})