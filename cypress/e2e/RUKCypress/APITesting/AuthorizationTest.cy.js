describe('Access Token Validation', ()=>{

    it('Access Token', ()=>{
        let accessToken;
        let clientEmail = Math.random().toString(36).substring(7)+`@gmail.com`;
        let customerName = Math.random().toString(36).substring(7);
        cy.log(clientEmail);
        cy.log(customerName);
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            body: {
                    clientName: "Hakan",
                    clientEmail: clientEmail
                },
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then((response)=>{

           accessToken = response.body.accessToken
           cy.log(accessToken);
        
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+`${accessToken}`
            },
            
            body:{
                 bookId: 1,
                 customerName: customerName
            },
        }).then((response)=>{

            cy.log(JSON.stringify(response.body));  
            cy.log(response.body.orderId);
        })
    })
})
    
})