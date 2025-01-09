describe('Date Picker Validation and Selection', () => {
    it('should validate and select a date from the date picker', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      cy.get('#datepicker').click(); // Click to open the date picker
  
      cy.get('#datepicker')
        .should('have.value', '') // Assuming it starts empty, adjust if needed
         // Ensure it's not pre-filled
  
      cy.get('.ui-datepicker-calendar')
        .find('a')
        .contains('15') // Select the 15th day
        .click();
  
      cy.get('#datepicker')
        .should('have.value', '01/15/2025'); 
    });
  });
  