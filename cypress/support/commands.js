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
Cypress.Commands.add('loginIntoOrange', ()=>{

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type('Admin');

        cy.get('[name="password"]').type('admin123',{log:false});

        cy.get('[type="submit"]').click();

})







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

const XLSX = require('xlsx');
Cypress.Commands.add('readExcelFile', (filePath) => {
   return cy.task('readExcelFile', filePath);
 });

 import 'cypress-iframe';

 import Ajv from 'ajv';
 import addFormats from 'ajv-formats';
 
 // Add a custom Cypress command for schema validation
 Cypress.Commands.add('schemaValidation', (schema, data) => {
   // Initialize AJV with strict mode enabled
   const ajv = new Ajv({ strict: true });
   addFormats(ajv); // Add format support (e.g., date-time, email)
 
   // Compile the schema
   const validate = ajv.compile(schema);
 
   // Perform validation
   const valid = validate(data);
 
   if (!valid) {
     // Log validation errors in a readable format
     cy.log('Schema validation failed. Errors:', JSON.stringify(validate.errors, null, 2));
     console.error('Schema validation errors:', validate.errors);
 
     // Throw an error with the validation issues
     throw new Error(`Schema validation failed: ${JSON.stringify(validate.errors, null, 2)}`);
   }
 
   // Assert that the validation passed
   expect(valid).to.be.true;
 });

 Cypress.Commands.add('login', (username, password) => {
   cy.get('#user-name').type(username);
   cy.get('#password').type(password);
   cy.get('#login-button').click();
});



Cypress.Commands.add('writeToExcel', (data, filePath) => {
   return cy.task('writeToExcel', { data, filePath });
 });