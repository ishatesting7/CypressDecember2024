describe('Dropdown Demo', ()=>{

    it('Dropdown', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country').should('have.value', 'japan');

    })

    it('Dummy Ticket Website', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-reasondummy-container').click();

        cy.get('[class="select2-search select2-search--dropdown"]').type('Visa{enter}');

        cy.wait(3000);

        cy.get('#select2-reasondummy-container').should('be.visible');
        cy.get('#select2-reasondummy-container').then(val=>{

           cy.log(val.text());


        })
    
    })

    it.only('validate enable and disbale', ()=>{

        cy.visit('https://formstone.it/components/dropdown/demo/');

        cy.get('#demo_disabled-dropdown-selected').should('be.visible');

        cy.get('#demo_basic').select('Two',{force:true});

        cy.get('#demo_basic_2').select('Connecticut', {force: true});

        cy.get('#demo_basic_2').should('contain','Connecticut');

        cy.contains('Formstone').click();

        cy.contains('View Documentation').click();
    
    })  
})