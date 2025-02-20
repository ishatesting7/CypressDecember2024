class CartPage {
    
    
    clickCheckoutButton() {
        return cy.get('[data-test="checkout"]');
    }

    clickContinueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]');
    }


}

export default CartPage;