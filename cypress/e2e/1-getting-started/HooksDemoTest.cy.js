// 4 hooks
// before, after, beforeeach and aftereach

describe('Prerequisite', ()=>{

    after(()=>{

        cy.log('I am in after');
    })

    afterEach(()=>{
        cy.log('I am after Each')
    })
    
    before(()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.log('I am in before')

    })

    beforeEach(()=>{

        cy.log('I am in before each')
    })
    
    
    it('Pre-requisite Steps', ()=>{

        cy.log('Test Case 1');

    })

    it('Pre-requisite Steps', ()=>{

        cy.log('Test Case 2');

    })

   

})