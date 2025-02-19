describe('API Schema validation using AJV', () => {
    before(() => {
      // Fetch the response and alias it
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.equal(200); // Validate the response status
        cy.wrap(response.body).as('responseBody'); // Alias the response body
      });
    });
  
    it('Schema Validation', function () {
      // Load schema from the fixture
      cy.fixture('demoExample.json').then((exampleSchema) => {
        const schemaPosts = exampleSchema.paths["/posts"].get.responses["200"].content["application/json"].schema;
  
        // Perform schema validation
        cy.get('@responseBody').then((responseBody) => {
          cy.schemaValidation(schemaPosts, responseBody);
        });
      });
    });
  });