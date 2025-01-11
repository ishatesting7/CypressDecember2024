describe('Radio Button', ()=>{

    it('Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#male').should('not.be.checked');

        cy.get('#male').click();

        cy.get('#male').should('be.checked');

        cy.get('#female').should('not.be.checked');

        cy.get('#female').click();

        cy.get('#female').should('be.checked');


        //male --
        //famale --
    })

    it.only('Check Boxes', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#sunday').check();

        cy.get('#sunday').uncheck();

        cy.get('#sunday').check();
        cy.get('#sunday').should('be.checked');

        cy.get('#monday').check();
        cy.get('#monday').should('be.checked');

        cy.get('#tuesday').check();
        cy.get('#tuesday').should('be.checked');

        cy.get('[type="checkbox"]').check();
        
        const checkbox = [];

        cy.get('[type="checkbox"]').eq(0).uncheck();

        cy.get('[type="checkbox"]').each(($cbox)=>{

            cy.wrap($cbox)
            .parent()
            .invoke('text')
            .then((txt)=>{
                checkbox.push(txt);
                
            });

        }).then(()=>{

            cy.log(checkbox);
        })
        //male --
        //famale --
    })
})