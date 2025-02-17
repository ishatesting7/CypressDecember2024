// filepath: /Users/vikasbhandari/Documents/GitHub/CypressDecember2024/cypress/e2e/sqlValidation.spec.js
describe('SQL Data Validation', () => {
    it('should validate data in the SQL database', () => {
      const query = 'SELECT * FROM your_table WHERE your_column = ?';
      const params = ['your_value'];
  
      cy.task('queryDatabase', { query, params }).then((results) => {
        expect(results).to.have.lengthOf(1);
        expect(results[0]).to.have.property('your_column', 'expected_value');
      });
    });
  });