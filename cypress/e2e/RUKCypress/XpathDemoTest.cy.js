describe('Demo Test', ()=>{

    it('Install Xpath and then Work', ()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        
        cy.xpath('//*[@id="content"]/div/div[1]/div/div/a').click();
    
    })
})