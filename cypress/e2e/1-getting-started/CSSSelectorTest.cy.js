describe('CSS Demo', ()=>{

    it('CSS Demo', ()=>{

        cy.visit('https://tutorialsninja.com/demo/');

        // CSS LOCATOR

        cy.get('a[title="My Account"]').click();

        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        cy.get('#input-email').type('vbtraining2@gmail.com')

        cy.get('#input-password').type('1234')

        cy.get('[type="submit"]').click();
    })
})


/*

<a href="https://tutorialsninja.com/demo/index.php?route=account/account" 
title="My Account" class="dropdown-toggle" data-toggle="dropdown">
<i class="fa fa-user"></i> <span class="hidden-xs hidden-sm hidden-md">
My Account</span> <span class="caret"></span></a>


TagName
Attribute
Value
asd

WAY TO WRITE CSS - 

1. If you are aware about id - then the css selector will be #id
2. If you are aware about classname - then the css selector will be .classname
3. If you are aware about attribute and value - [attribute='value']
4. If you are aware about attribute, value and tagname - tagname[attribute='value']



<div>
<li>
<ul>
<button>

*/