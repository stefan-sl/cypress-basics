/// <reference types="Cypress">

describe('Home Page', () => {
    it('should display the app name on the home page', () => {
        cy.visit('/')

        cy.get('.highlight-card')
            .should('contain.text', 'cypress-basics')
    })
})