describe('Home Page', () => {

    it('should display the app name on the home page', () => {
        cy.visit('/')
        cy.get('.highlight-card')
            .should('contain.text', 'cypress-basics')
    })

    it('should update preview command in the terminal area based on selected button', () => {
        cy.visit('/')
        cy.get('[data-cy="button-i-want"]').click();
        cy.get('.terminal').should('contain.text', 'ng add @angular/pwa');
    })
})