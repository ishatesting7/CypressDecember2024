describe('Addition of all the amount for the products', () => {

    it('Addition of all the amount for the products', () => {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{limit:3}
            
        }).then((response) => {
            let totalAmount = 0;
            response.body.forEach((product) => {
                totalAmount += product.price; // totalAmount = totalAmount + product.price

                if(product.category == "men's clothing")
                    {
                        cy.log(product.category);
                    }
                    
                cy.log(product.description)
            })
            cy.log(totalAmount);

    })


})

})


