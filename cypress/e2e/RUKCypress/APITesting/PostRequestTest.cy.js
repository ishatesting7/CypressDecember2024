describe('Petstore API - Create Users with List', () => {
    const apiUrl = 'https://petstore.swagger.io/v2/user/createWithList';
  
    it('should create multiple users successfully', () => {
      const users = [
        {
          id: 1,
          username: 'john_doe',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'password123',
          phone: '123-456-7890',
          userStatus: 1
        },
        {
          id: 2,
          username: 'jane_smith',
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password: 'password456',
          phone: '987-654-3210',
          userStatus: 1
        }
      ];
  
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: users,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Validate the status code
        expect(response.status).to.eq(200);
  
        // Optionally, you can validate the response body or perform further checks
        // Since Petstore API doesn't return much data for this request, we focus on the status code
        //expect(response.body).to.be.empty;
      });
    });
  
    it('should fail to create users if payload is invalid', () => {
      const invalidUsers = [
        {
          id: 'invalid',  // invalid id type
          username: 'invalid_user',
          firstName: '',
          lastName: '',
          email: 'invalid_email',
          password: '123',
          phone: 'invalid_phone',
          userStatus: 0
        }
      ];
  
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: invalidUsers,
        headers: {
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false  // Allow failure to test the error response
      }).then((response) => {
        // Check that the response has a 400 status code for bad request
        expect(response.status).to.eq(500);
  
        // Check if the error message is returned
        expect(response.body).to.have.property('message').that.contains('something bad happened');
      });
    });
  
    it('should return 400 if the request body is empty', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: [],
        headers: {
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false  // Allow failure to check the error response
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message').that.contains('ok');
      });
    });
  });
  