describe('Tester page HTTP request with stub', () => {

    beforeEach(() => {
        cy.visit('/tests?color=red');
    })

    it('on button clicked the request is made and the correct items are displayed', () => {
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments', {
            statusCode: 200,
            body: [
                {
                    email: 'firstuser@firstuser.com'
                    // a proper stub would have all the properties returned by the API
                }
            ]
        }).as('fetchingComments');
        cy.get('[data-cy="get-comments-button"]').click();
        cy.wait("@fetchingComments", { timeout: 60000 }).then((res) => {
            cy.get('[data-cy="number-of-comments"]').should('contain.text', 'There are 1 comments');
            cy.get('[data-cy="first-comments"]').should('contain.text', 'firstuser@firstuser.com');
        });
    })
})