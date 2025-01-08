describe('Dropdown Demo', ()=>{

    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country').should('have.value','japan');

    })

    it.only('Validate all the dropdown value', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

    cy.get('#country')
      .find('option')
      .then(($dropdownV) => {
        // Extract all the option texts into an array
        const texts = $dropdownV.map((index, option) => Cypress.$(option).text()).get();

        // Log the array of texts for visibility
        cy.log(texts);

        // Expected dropdown values
        const expectedValues = [
          'Select a country', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
          'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia'
        ];

        // Validate that the extracted texts match the expected values
        expect(texts).to.deep.eq(expectedValues);
      });

    })


    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('Japan');

        cy.get('#country')
        .find(':selected')
        .should('contain','Japan')

    })
})
