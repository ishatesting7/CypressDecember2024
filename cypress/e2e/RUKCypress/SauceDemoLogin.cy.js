import LoginPage from "../../support/Pages/loginPage";
import InventoryPage from "../../support/Pages/InventoryPage";

describe('SauceDemo - Login Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login with valid credentials', () => {
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.getInventoryItems().should('have.length.greaterThan', 0);
    });

    it('should not login with invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');
        cy.get('.error-message-container').should('be.visible');
    });
});