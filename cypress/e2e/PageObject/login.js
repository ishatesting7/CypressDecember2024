class loginPage
{
    usernameLoc = "#input-username";
    passwordLoc = "#input-password";
    loginBtn = '[type="submit"]';
    
    visitUrl(url)
    {
        cy.visit(url);
    }
    enterUsername(username)
    {
        cy.get(this.usernameLoc).type(username);
    }

    enterPassword(password)
    {
        cy.get(this.passwordLoc).type(password);
    }
    
    clickLoginBtn()
    {
        cy.get(this.loginBtn).click();
    }
}
export default new loginPage;
