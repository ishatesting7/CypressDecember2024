import login from "../PageObject/login"
describe('Web Table', ()=>{

    let url = 'https://demo3x.opencartreports.com/admin/index.php?route=common/login'
    //th, td, tr
    it('Count the number of Row and Columns', ()=>{

        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();
    })

    it('Display all the Table Data', ()=>{

        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();
    })

    it('Click Pagination - 2 and again you need to click 1', ()=>{

        
    })

})