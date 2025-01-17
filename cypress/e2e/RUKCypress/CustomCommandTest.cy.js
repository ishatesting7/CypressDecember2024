describe("Custom Command Demo", ()=>{

    
    beforeEach(()=>{
        cy.loginIntoOrange();
    })
    
    it("Custom Command Demo - Admin", ()=>{

        cy.contains('Admin').click();
        cy.validateLocator('.oxd-brand-banner > img');
    })

    it("Custom Command Demo - PIM", ()=>{

        cy.contains("PIM").click();
        cy.validateLocator('.oxd-brand-banner > img');

     })

     it("Custom Command Demo - Leaves", ()=>{
 
        cy.contains("Leave").click();
        cy.validateLocator('.oxd-brand-banner > img');

     })
})