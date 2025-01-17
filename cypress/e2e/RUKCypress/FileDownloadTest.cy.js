describe('File Download Page', ()=>{

    it('Download the file and place in fixture folder', ()=>{


        // cy.visit('https://filesamples.com/formats/csv');

        // cy.get('[href="/samples/document/csv/sample3.csv"]').then(demo=>{

        //     const url = demo.text();
        
        // })
        const fileDownloadUrl = 'https://filesamples.com/samples/document/csv/sample3.csv';
        
        const timestamp = Date.now();
        const fileName = `${timestamp}demo.csv`;

        cy.downloadFile(fileDownloadUrl,'cypress/downloads',fileName);

        cy.task('copyFile',{
            source:`cypress/downloads/${fileName}`,
            destination:`cypress/fixtures/${fileName}`
        })

        
    })
})