import { faker } from '@faker-js/faker';

describe('Ecommerce Playground - Register Users', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    });

    it('should register multiple users using fixture data', () => {
        cy.fixture('dataAPIMultiple').then((data) => {
            data.rows.forEach((user) => {
                const [firstName, lastName] = user.full_name.split(' ');
                //Rogers Walker
                // Fill out the registration form
                cy.get('#input-firstname').type(firstName);
                cy.get('#input-lastname').type(lastName);
                cy.get('#input-email').type(  faker.food.dish() +   user.email);
                cy.pause();
                cy.get('#input-telephone').type(user.phone);
                cy.get('#input-password').type(user.password);
                cy.get('#input-confirm').type(user.password);

                // Agree to the privacy policy and submit the form
                cy.get('.float-right > .custom-control > .custom-control-label').click();

                cy.get('[value="Continue"]').click();

                // Verify registration success
                cy.get('.page-title').should('contain', 'Your Account Has Been Created!');
                
                // Log out before the next iteration
                cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');

                cy.wait(2000);

                cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

            });
        });
    });
});