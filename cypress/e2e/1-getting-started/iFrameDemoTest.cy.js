describe('Handle Iframe', ()=>{

    it('Handle Iframe', ()=>{

        cy.visit('https://nunzioweb.com/iframes-example.htm');

        cy.frameLoaded('iframe[src="lyrics/455Rocket.html"]')

        cy.iframe('iframe[src="lyrics/455Rocket.html"]').then((lyrics)=>{

        cy.log(lyrics.text);
        
        })

    })
})