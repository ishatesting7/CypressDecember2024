describe('Invoke Command ', ()=>{


    beforeEach(()=>{
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
    it('Invoke Command Details', ()=>{
        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').invoke('removeAttr','target')
        
        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').click();

        cy.location().then((pageActive) =>{
            cy.log(pageActive.href);
        })

        cy.go('back');

        cy.go('forward');

        

    })


    it('Invoke Command Details', ()=>{
        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').invoke('attr','target').then(target =>{

            cy.log(target);
        
        })

        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').should('have.attr','target','_blank');
        

        cy.get('.oxd-text--h5').invoke('text').then(text =>{
            cy.log(text);
            expect(text).to.be.eq('Login');    

        })
        cy.get('.oxd-sheet > :nth-child(2)').invoke('text').then(password=>{
            cy.log(password)
            expect(password).to.be.equal('Password : admin123')
        })
    })

    
})