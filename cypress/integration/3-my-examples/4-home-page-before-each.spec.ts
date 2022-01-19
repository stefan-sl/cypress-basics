describe('Home Page Before Each', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should display the app name on the home page', () => {
        cy.get('.highlight-card')
            .should('contain.text', 'cypress-basics')
    })

    it('should update preview command in the terminal area based on selected button', () => {
        cy.get('[data-cy="button-i-want"]').click();
        cy.get('.terminal').should('contain.text', 'ng add @angular/pwa');
    })
})