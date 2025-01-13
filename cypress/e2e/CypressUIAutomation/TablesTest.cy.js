import login from "../PageObject/login"
describe('Web Table', ()=>{

    let url = 'https://demo3x.opencartreports.com/admin/index.php?route=common/login'
    //th, td, tr
    it('Count the number of Row and Columns', ()=>{

        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();


        cy.get('[class="table table-bordered table-hover"]>tbody>tr').should('have.length.above',15);

        cy.get('[class="table table-bordered table-hover"]>thead>tr>td').should('have.length.above', 7);


    })

    it('Display all the Table Data', ()=>{

        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();

        cy.get('[class="table table-bordered table-hover"]>tbody>tr')  //20 Match
        .each(($rowValue, index, $row)=>{

            cy.wrap($rowValue).within(()=>{

                cy.get("td").each(($column,index,$cols)=>{
                    cy.log($column.text());
                })
            })

        })

    })

    it('Validate Specific Value', ()=>{


        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();
        cy.get('[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)>td:nth-child(3)').then(val =>{

            cy.log(val.text());
        })

        cy.get('[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)>td:nth-child(5)').then(amount =>{

            const amou = amount.text();
            expect(amou).to.be.eqls("$471.30")
            cy.log(amount.text())
        })
    })


    it.only('Pagination',function(){

    
        login.visitUrl(url);
        login.enterUsername('demo');
        login.enterPassword('demo');
        login.clickLoginBtn();

        cy.get('[href="#collapse4"]').click();

        cy.get('#collapse4 > :nth-child(1) > a').click();
        
        cy.get('[class="col-sm-6 text-right"]').then(txt =>{

            let value;
            let val = txt.text()
            cy.log(val.indexOf("("));
            cy.log(val.indexOf("Pages"));
            value = val.substring(val.indexOf("(")+1, val.indexOf("Pages")-1);
            cy.log(value);

            cy.log("Total Number of Pages is = "+value);
        })
})
})