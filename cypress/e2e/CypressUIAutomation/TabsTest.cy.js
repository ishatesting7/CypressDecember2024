describe('Fixture Test', ()=>{

    let username1, password1;
        it("Read the values from external file",()=>{
    
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            
            cy.get('[href="https://www.facebook.com/OrangeHRM/"]').invoke('removeAttr','target').click();
    
            cy.wait(3000);

            cy.url().should('eq','https://www.facebook.com/OrangeHRM/');
        })

        it.only('Using Prop', ()=>{

            cy.visit('https://the-internet.herokuapp.com/windows');
            cy.get('.example > a').then((baseUrl)=>{

                const url = baseUrl.prop('href');
                cy.visit(url);
            })
        })
    })