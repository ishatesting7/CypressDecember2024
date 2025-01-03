/*
before
after
beforeEach
afterEach
*/

describe('Hooks Implementation', ()=>{

    before('I am in Before', ()=>{
        cy.log("I am in BEFORE");
        // Session Clear, Cookies, Set the Variable, Local Storage
    })

    beforeEach('I am in beforeEach',()=>{
        cy.log('I am in before each test cases')
        //Loading the url, navigating to home page
    })

    it('This is test case 1', ()=>{

        cy.log('I am in test case 1');
    })

    it('This is test case 2 ', ()=>{

        cy.log('I am in test case 2');
    })

    it('This is test case 3 ', ()=>{

        cy.log('I am in test case 3');
    })


    after('I am in After', ()=>{
        cy.log("I am in AFTER");
    })

    afterEach('I am in after',()=>{
        cy.log('I am in after each test cases')
    })

})


describe('Hooks Implementation - 2 ', ()=>{

    before('I am in Before - 2', ()=>{
        cy.log("I am in BEFORE - 2");
        // Session Clear, Cookies, Set the Variable, Local Storage
    })

    beforeEach('I am in beforeEach- 2',()=>{
        cy.log('I am in before each test cases - 2')
        //Loading the url, navigating to home page
    })

    it('This is test case 1 - 2', ()=>{

        cy.log('I am in test case 1 - 2');
    })

    it('This is test case 2 ', ()=>{

        cy.log('I am in test case 2 - 2');
    })

    it('This is test case 3 ', ()=>{

        cy.log('I am in test case 3 - 2');
    })


    after('I am in After', ()=>{
        cy.log("I am in AFTER - 2");
    })

    afterEach('I am in after',()=>{
        cy.log('I am in after each test cases - 2')
    })

})


describe('Login into system', ()=>{

    let abc = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    

        beforeEach('Pre-requisite Steps', ()=>{

            cy.visit(abc);

        //Validate the URL - Assertion

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait(5000);

        //cy.pause();

        cy.log('I am running cypress test');

        console.log('I am in console - running cypress test');

        //CSS LOCATOR - GET - Identifying the element over the UI 

        cy.get('.orangehrm-login-branding > img').should('be.visible');

        cy.get('.orangehrm-login-logo > img').should('be.visible');

        cy.get('[name="username"]').type('Admin');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');

        cy.get('.oxd-button').click();
        })

        it("Admin Menu",()=>{

            cy.contains('Admin').click();
        })

        it("PIM Menu",()=>{

            cy.contains('PIM').click();
        })


})

