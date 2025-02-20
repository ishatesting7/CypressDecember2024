class cartStepOne
{
    enterFirstName(value)
    {
        cy.get('[data-test=firstName]').type(value);
    }
    enterLastName(value)
    {
        cy.get('[data-test=lastName]').type(value);
    }
    enterPostalCode(value)
    {
        cy.get('[data-test=postalCode]').type(value);
    }
    clickContinueButton()
    {
        cy.get('[data-test=continue]').click();
    }
}
export default cartStepOne;