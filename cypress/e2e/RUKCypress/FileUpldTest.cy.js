describe('File Upload', ()=>{

    it.only('Single File Upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('profile.json');
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('[class="example"] h3').should('have.text','File Uploaded!')
        
    })

    it.only('Rename File and Upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'profile.json',fileName:'testApplication.json'});
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('[class="example"] h3').should('have.text','File Uploaded!')
        
    })

    it.only ('Multiple File Upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['profile.json','users.json','example.json']);
        cy.xpath('//strong[normalize-space()="Files You Selected:"]').should('have.text','Files You Selected:');
        
    })

    
})