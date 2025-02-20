import LoginPage from "../../support/Pages/loginPage";
import InventoryPage from "../../support/Pages/InventoryPage";
import CartPage from "../../support/Pages/cartPage";
import cartStepOne from "../../support/Pages/cartStepOnePage";
describe('SauceDemo - Login Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const cartStepOnePage = new cartStepOne();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login with valid credentials and make a purchase', () => {
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.getInventoryItems().should('have.length.greaterThan', 0);
        inventoryPage.addProductToCart().click(); 
        inventoryPage.getCartButton().click();
        cartPage.clickCheckoutButton().click();
        cartStepOnePage.enterFirstName('John');
        cartStepOnePage.enterLastName('Doe');
        cartStepOnePage.enterPostalCode('12345');
        cartStepOnePage.clickContinueButton();


    });

});