describe('Dropdown Demo', ()=>{

    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country').should('have.value','japan');

    })

    it('Validate all the dropdown value', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

    cy.get('#country')
      .find('option')
      .then(($dropdownV) => {
        // Extract all the option texts into an array
        const texts = $dropdownV.map((index, option) => Cypress.$(option).text()).get();

        // Log the array of texts for visibility -- Arrauy[10]
        cy.log(texts);

        // Expected dropdown values
        const expectedValues = [
          'Select a country', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
          'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia'
        ];

        //Array[10]

        // Validate that the extracted texts match the expected values
        expect(texts).to.eq(expectedValues);
      });

    })


    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country')
        .find(':selected')
        .should('contain','Japan')

    })


    it.only('Dropdown Demo - Without Select Tag', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-reasondummy-container').click();

        cy.get('.select2-search__field').type('Visa extension').wait(1000).type('{enter}')
        
        cy.get('#select2-reasondummy-container').should('contain', 'Visa extension');


        //TypeAndEnter
        //SelectAndEnter
        
        cy.get('#select2-billing_country-container').should('be.visible');

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Nepal{enter}');

        cy.get('#select2-billing_country-container').should('have.text', 'Nepal');

      })
    
})
