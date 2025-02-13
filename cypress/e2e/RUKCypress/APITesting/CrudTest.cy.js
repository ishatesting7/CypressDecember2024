describe('Petstore API - User Endpoint Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2/user/john_doe';
  
    before(()=>{

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
            url: "https://petstore.swagger.io/v2/user/createWithList",
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
    })
    // Test Case 1: Get User Details
    it('should retrieve details of the user "john_doe"', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
        failOnStatusCode: false, // Don't fail the test if the status code is not 2xx
      }).then((response) => {
       expect(response.status).to.eq(200);
        expect(response.body).to.have.property('username', 'john_doe');
        expect(response.body).to.have.property('firstName');
        expect(response.body).to.have.property('lastName');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('phone');
      });
    });
  
    // Test Case 2: Update User Details
    it('should update the user "john_doe" details successfully', () => {
      const updatedUser = {
        id: 1,
        username: 'john_doe',
        firstName: 'Johnathan',
        lastName: 'Doe',
        email: 'johnathan.doe@example.com',
        password: 'newpassword123',
        phone: '123-555-7890',
        userStatus: 1
      };
  
      cy.request({
        method: 'PUT',
        url: apiUrl,
        body: updatedUser,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', '1');
      });
    });
  
    // Test Case 3: Delete User
    it('should delete the user "john_doe" successfully', () => {
      cy.request({
        method: 'DELETE',
        url: apiUrl,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'john_doe');
      });
    });
  
    // Test Case 4: Get Deleted User (Expected to Fail)
    it('should return 404 when trying to get the deleted user "john_doe"', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
        failOnStatusCode: false // We expect this to fail (404)
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'User not found');
      });
    });
  });
  