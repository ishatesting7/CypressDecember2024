class InventoryPage {
    getInventoryItems() {
        return cy.get('.inventory_item');
    }

    getCartButton() {
        return cy.get('.shopping_cart_link');
    }

    addProductToCart(){
        return cy.get('[name="add-to-cart-sauce-labs-backpack"]');
    }
    
}

export default InventoryPage;