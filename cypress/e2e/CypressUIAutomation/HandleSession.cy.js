describe('Commands', ()=>{


    before(()=>{

        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

    })
    it('Lambda Test Website', ()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

        cy.get('.card-body > .btn').click();

        cy.screenshot();

        //cy.pause();
        

    })
})