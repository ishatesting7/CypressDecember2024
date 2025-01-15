describe('Alerts', ()=>{

    it('Handling Alerts - JS Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (temp)=>{

            expect(temp).to.contain('I am a JS Alert');
        })
        
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('JS Confirm - Ok and Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contains('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok');

    })

    it('JS Confirm - Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>false);

        cy.get('#result').should('have.text','You clicked: Cancel');

    })
})