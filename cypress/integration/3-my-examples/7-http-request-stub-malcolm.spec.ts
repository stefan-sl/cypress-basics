describe('Tester page HTTP request with stub', () => {

    /**
     * There is a second button on the tests page that, when clicked, will
     * request comments from the API. It then
     *      Displays the number of comments
     *      Displays the email associated with the first comment
     * If you run the app live you will see that the API request returns 500 comments
     * and this amount could change at any time meaning that we can't write a meaningful
     * test with the actual data because it's not guaranteed what the first comment will be
     * or that the number of comments will stay the same.
     * 
     * What we need to do is mock the data coming from the request to verify
     * that the UI displays it appropriately
     */

    beforeEach(() => {
        cy.visit('/tests?color=red');
    })

    /**
     * This test should:
     * 1. Simulate a click on the 'Get Comments' button
     * 2. Use Cypress to intercept the API Request to the URL
     * 3. User Cypres to send back mock data that matches the structure of the data returned by the API
     * 4. Wait for the request to finish
     * 5. Verify that the 'There are 1 comments' text is correct
     * 6. Verify that the email displayed in the 'First comment is by...' text is correct
     */
    it('on button clicked the request is made and the correct items are displayed', () => {
        
    })
})