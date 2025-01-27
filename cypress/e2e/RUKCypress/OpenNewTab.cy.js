describe('Opening a new Tab', ()=>{

    it('Handle Multiple Tab', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').invoke('removeAttr','target').click();

        cy.go('back');

   
        cy.get('[name="username"]').type('Admin');

        cy.get('[type="password"]').type('admin123');

        cy.get('[type="submit"]').click();


    })
})