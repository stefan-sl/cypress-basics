describe('Tester page HTTP request', () => {
    /**
     * The tests page has a 'Make HTTP Request' button that, when clicked, will make
     * a request to fetch a list of persons from the API url https://jsonplaceholder.cypress.io/users.
     * We want to test the functionality of this button and the associated API request
     */

    beforeEach(() => {
        cy.visit('/tests?color=blue');
    })

    /**
     * For the first test we want to:
     * 1. Use Cypress to make a request directly to the API
     * 2. Verify that the data returned by the request has the correct number of items (10)
     */
    it('verify that request returns the correct number of items', () => {
        //
    })

    /**
     * For the second test we want to:
     * 1. Simulate a click on the 'Get People' button
     * 2. Use Cypress to intercept the API Request to the URL
     * 3. Wait for the request to finish
     * 4. Verify that there are 10 users listed on the page
     * 5. Verify that the first user listed is 'Leanne Graham'
     * 
     * Hint: be careful of the order of click/intercept. You can use .as to store
     * the request to be used later with .wait
     */
    it('on button clicked the request is made and the correct items are displayed', () => {
        
    })
})