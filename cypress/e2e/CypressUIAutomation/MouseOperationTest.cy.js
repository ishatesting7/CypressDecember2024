
describe('Mouse Operation', ()=>{

    it('Mouse Hover', ()=>{

        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27"]').should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        
        cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27"]').should('be.visible');

        cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20_27"]').click();

    
    })

    it('Right Click', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

       /*
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');

        cy.get('.context-menu-list').should('be.visible');
       */

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();


    })

    it('Double Click', ()=>{

        cy.visit('https://qa-practice.netlify.app/double-click');

        //cy.get('#double-click-btn').trigger('dblclick');

        cy.get('#double-click-btn').dblclick();
    })

    it.only('Drag and Drop', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

        cy.wait(2000);

        cy.get('#box1').drag('#box106');

    })
})