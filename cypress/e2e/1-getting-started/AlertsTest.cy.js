describe('Alert',()=>{


    it('JS Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert');
        })

        cy.get('[id="result"]').should('have.text','You successfully clicked an alert');

    })

    it('JS Confirm', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })

        cy.get('[id="result"]').should('have.text','You clicked: Ok');
    })


    it('JS Confirm - Cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=>false);

        cy.get('[id="result"]').should('have.text','You clicked: Cancel');
    })

    it('JS Prompt Window', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');



        cy.window().then((wind)=>{
            cy.stub(wind,'prompt').returns('Welcome to Cypress');
        })

        cy.get('[onclick="jsPrompt()"]').click();

        
        cy.get('[id="result"]').should('have.text', 'You entered: Welcome to Cypress')

    })

    it.only("Authetication", ()=>{
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',
        //     {
        //         auth:
        //         {
        //             username:"admin",
        //             password:"admin"
        //         }
        //     }
        // )

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('[class="example"] p').should('have.contain', 'Congratulations! You must have the proper credentials.')
    })
})