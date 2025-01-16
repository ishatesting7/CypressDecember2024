describe('Iframe Demo Test', ()=>{

    it('IFrame Demo Test', ()=>{

        cy.visit('https://demo.automationtesting.in/Frames.html');

        cy.frameLoaded('#singleframe');
        
        cy.iframe('[name="SingleFrame"]')
       .find('[type="text"]')
       .type('abc');

        cy.iframe('[name="SingleFrame"]')
        .find('h5')
        .then(txt=>{

        cy.log(txt.text())

       })


    })



    it.only('IFrame Demo Test - Iframe Inside Iframe ', ()=>{

        cy.visit('https://demo.automationtesting.in/Frames.html');

        cy.get('[href="#Multiple"]').click();

        cy.frameLoaded('[src="MultipleFrames.html"]');

        cy.frameLoaded('[src="SingleFrame.html"]');
        
        cy.iframe('[src="SingleFrame.html"]')
       .find('[type="text"]')
       .type('abc');

        cy.iframe('[src="SingleFrame.html"]')
        .find('h5')
        .then(txt=>{

        cy.log(txt.text())

       })

       
    })
})
