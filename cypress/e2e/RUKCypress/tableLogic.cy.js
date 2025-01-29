describe("Table Data", ()=>{
        beforeEach  (()=>{

            cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login')

            cy.get('[name="username"]').type('demo');

            cy.get('[name="password"]').type('demo');

            cy.get('[type="submit"]').click();
        })

        it('Go to the Tables', ()=>{

            cy.contains('Catalog').click();

            cy.contains('Products').wait(1000).click();

            cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length.greaterThan', 17);

            cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.lengthOf.greaterThan',16);
        })

        it('Read all the content of the table', ()=>{

            cy.contains('Catalog').click();

            cy.contains('Products').wait(1000).click();

            cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row, index, $rows)=>{

                cy.wrap($row).within(()=>{

                    cy.get('td').each(($col, index, $cols)=>{

                        cy.log($col.text());

                        if ($col.text() === 'HTC Touch HD')
                        {
                            cy.log("Product is available in the Inventory");
                        }
                    })
                })

            })

        })

        it ('Get list of all countries ', ()=>{

            cy.visit('https://cosmocode.io/automation-practice-webtable/')

            cy.get('table[id="countries"]>tbody>tr')
            .each(($row, index, $rows)=>{

                cy.wrap($row).within(()=>{

                    cy.get('td').each(($col, index, $cols)=>{

                        cy.log($col.text());

                        if ($col.text() === 'HTC Touch HD')
                        {
                            cy.log("Product is available in the Inventory");
                        }
                    })
                })

            })
        })

        it.only('Pagination ', ()=>{

            cy.visit('https://testautomationpractice.blogspot.com/');

            cy.get('[id="pagination"]').find('li').each(($row)=>{
                cy.wrap($row).click();

            })

        })
    
})