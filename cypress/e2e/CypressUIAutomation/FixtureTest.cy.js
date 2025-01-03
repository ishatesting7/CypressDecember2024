describe('Fixture Test', ()=>{

let username1, password1;
    it("Read the values from external file",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('profile').then((dataValue)=>{
        
        username1 = dataValue.username;
            
        password1 = dataValue.password;

        cy.get('[name="username"]').type(username1);

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password1);

        cy.get('.oxd-button').click();


        })
    })

    after(()=>{

        cy.get('.oxd-brand-banner > img').should('be.visible');
    })
})