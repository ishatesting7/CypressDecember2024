describe('Dropdown Demo', ()=>{

    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#country').select('India');

        cy.get('#country').select('China');

        cy.get('#country').should('have.value','china');

        cy.get('#country').find('option:selected').should('contain', 'China');

        cy.get('#country').then((value)=>{

            let country = value.val();
            cy.log(country);
            expect('china').to.be.equal(country);
        })

    })


    it('Dropdown Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#country').then((value)=>{

            let country = value.val();
            cy.log(country);
            expect('usa').to.be.equal(country);
        })

        cy.get('#country')
        .find('option:selected')
        .then((selectedOption) => {
        const selectedText = selectedOption.text().trim();
        
        // Log the selected text to the Cypress console
        cy.log(selectedText);
        
        // Optionally, assert if the selected text is expected
        expect(selectedText).to.equal('United States'); // Replace 'China' with the expected text
      });

    })

    it.only('Normal Dropdown', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Nepal').wait(1000).type('{enter}');
        
    })
})
