describe('Aliasing Demo', ()=>{

    it('Aliasing', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('[name="username"]').as('usernameInput')
        
        cy.get('@usernameInput').type('Admin');

        cy.get('@usernameInput').should('be.visible');

        cy.get('[name="password"]').type('admin123');

        cy.get('[type="submit"]').click();
          
    })

    it('CSS Locator -> 1 ', ()=>{
        //HTML - 


        /*
        [name="username"]

        <input data-v-1f99f73c="" class="oxd-input oxd-input--active" 
        name="username" placeholder="Username" autofocus="">
        
        input - TagName
        class, name, placeholder - Attribute
        Value


        4 - Ways
        --------

        1. If you are aware about the ID, then the CSS Selector will be 
        #id
        2. If you are aware about the classname, then the CSS Selector will be
        .classname  -->  .oxd-input.oxd-input--active
        3. If you are aware about the attribute and value then the CSS selector will be 
        [attribute = 'value']
        4. If you are aware about the attribute, value and tagname then the CSS Selector will be
        tagname[attribute = 'value']
        */




    })
})