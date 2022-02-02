describe('Tester page HTTP request', () => {

    beforeEach(() => {
        cy.visit('/tests?color=blue');
    })

    it('verify that request returns the correct number of items', () => {
        cy.request('https://jsonplaceholder.cypress.io/users').its('body').should('have.length', 10)
    })

    it('on button clicked the request is made and the correct items are displayed', () => {
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/users').as('fetchingPersons');
        cy.get('[data-cy="http-request-button"]').click();
        cy.wait("@fetchingPersons", { timeout: 60000 }).then((res) => {
            cy.get('.retrieved-person').should('have.length', 10);
            cy.get('.blue > :nth-child(4)').should('contain.text', 'Leanne Graham');
        });
    })
})