// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginOrange', (email, password, flag) => { 

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(email);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get('.oxd-button').click();
    cy.log(flag)
 })

 Cypress.Commands.add('validateLocator', (locator) => { 

    cy.get(locator).should('be.visible');

 })

 Cypress.Commands.add('containValue', (value) => { 

    cy.contains(value).should('be.visible');

 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types= "cypress" /> 

require('cypress-xpath');

require('@4tw/cypress-drag-drop')

require('cypress-iframe');

import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')
