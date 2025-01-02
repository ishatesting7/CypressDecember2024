describe('Sauce Demo Website Testing', ()=>{

    it.skip('SauceDemo Testing', ()=>{

        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type('standard_user');

        cy.get('#password').type('secret_sauce');

        cy.xpath('//input[@name="login-button"]').click({force:true}) //Responsible for clicking any hidden element
        
        cy.contains('Sauce Labs Backpack').click();

   
    })

    it('Blaze Demo - Test', ()=>{

        cy.visit('https://bstackdemo.com/');

        cy.get('#signin').click();
        cy.get('[class=" css-1hwfws3"]').eq(0).click();

        cy.wait(1000);
        //cy.contains('demouser').click();
        cy.get('#react-select-2-option-0-0').click();

        cy.get('[class=" css-1hwfws3"]').eq(1).click();

        cy.get('#react-select-3-option-0-0').click();

        cy.get('#login-btn').click();

        cy.contains('Add to cart').click();

        cy.contains('Checkout').click();

        cy.get('#firstNameInput').type('Demo');

        cy.get('#lastNameInput').type('Demo2');

        cy.get('#addressLine1Input').type('Address');

        cy.get('#provinceInput').type('MH');

        cy.get('#postCodeInput').type('121');

        cy.get('#checkout-shipping-continue').click();

        cy.get('[data-test="shipping-address-heading"]').should('have.text','Your Order has been successfully placed.')

        cy.get('.checkout-form > :nth-child(2)').should('contain.text','Your order number')
    
        
    })
})