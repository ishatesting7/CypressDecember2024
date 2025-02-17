describe('Petstore API - Create, Update, and Get Pet', () => {
    it('should create a new pet, update it, and retrieve it', () => {
        const petPayload = {
            id: 12345,
            name: "Doggie",
            category: {
                id: 1,
                name: "Dogs"
            },
            photoUrls: [
                "https://example.com/photo1.jpg"
            ],
            tags: [
                {
                    id: 1,
                    name: "tag1"
                }
            ],
            status: "available"
        };

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: petPayload,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petPayload.id);
            expect(response.body).to.have.property('name', petPayload.name);

            // Store the pet ID
            const petId = response.body.id;

            // Update the pet
            const updatedPetPayload = {
                ...petPayload,
                name: "Updated Doggie"
            };

            cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet',
                body: updatedPetPayload,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((updateResponse) => {
                expect(updateResponse.status).to.eq(200);
                expect(updateResponse.body).to.have.property('id', petId);
                expect(updateResponse.body).to.have.property('name', updatedPetPayload.name);

                // Use the pet ID in a GET request
                cy.request({
                    method: 'GET',
                    url: `https://petstore.swagger.io/v2/pet/${petId}`,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((getResponse) => {
                    expect(getResponse.status).to.eq(200);
                    expect(getResponse.body).to.have.property('id', petId);
                    expect(getResponse.body).to.have.property('name', updatedPetPayload.name);
                });


            // Use the pet ID in a GET request
                cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/${petId}`,
                headers: {
                    'Content-Type': 'application/json'
                }
                }).then((getResponse) => {
                    expect(getResponse.status).to.eq(200);
                    expect(getResponse.body).to.have.property('id', petId);
                    expect(getResponse.body).to.have.property('name', updatedPetPayload.name);
            });

                cy.request({

                method: 'DELETE',
                url: `https://petstore.swagger.io/v2/pet/${petId}`
                }).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(200);
                expect(deleteResponse.body).to.have.property('code', 200);          
                })
            });
        });
    });
});