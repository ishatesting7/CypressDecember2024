describe('API - Test', ()=>{

    it('Get Books from Database', ()=>{

        cy.request('GET','https://bookcart.azurewebsites.net/api/Book')
        .then((response) =>{
            
            expect(response.status).to.eq(200)
            let res = response.body;
            cy.log(JSON.stringify(res));

            response.body.forEach((book) => {
                expect(book).to.have.all.keys(
                  'bookId', 'title', 'author', 'category', 'price', 'coverFileName'
                );

                if (book.bookId === 2) {
                    // expect(book.title).to.eq('Harry Potter and the Chamber of Secrets');
                    // expect(book.author).to.eq('JKR');
                    // expect(book.category).to.eq('Mystery');
                    // expect(book.price).to.eq(236);
                    cy.log(book.title);
                  }

                if (book.bookId === 3) {
                    expect(book.title).to.eq('Harry Potter and the Prisoner of Azkaban');
                    expect(book.author).to.eq('JKR');
                    expect(book.category).to.eq('Romance');
                    expect(book.price).to.eq(213);
                  }
            
        })
    })
    })


    it('Get Book by ID',()=>{

        cy.request('GET','https://bookcart.azurewebsites.net/api/Book/3')
        .then((response)=>{

            let res = JSON.stringify(response.body);
            cy.log(res);
        })
    })
})