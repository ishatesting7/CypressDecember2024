describe('Data Driven Test', ()=>{

    it('Data Driven Test', ()=>{

        cy.fixture("users").then((dataValue)=>{

            dataValue.forEach((dValue) => {
                
                cy.log(dValue.name);

                cy.log(dValue.address.street)
            });
        })
    })
})