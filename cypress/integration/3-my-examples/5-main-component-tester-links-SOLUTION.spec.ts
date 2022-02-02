describe('Main page tester links', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('blue test page link should go to blue page', () => {
        cy.get('[data-cy="blue-button"]').click();
        cy.url().should('include', 'color=blue');
        cy.url().should('eq', 'http://localhost:4200/tests?color=blue');
        cy.wait(4000);
    })

    it('red test page link should go to red page', () => {
        cy.get('[data-cy="red-button"]').click();
        cy.url().should('include', 'color=red');
        cy.url().should('eq', 'http://localhost:4200/tests?color=red');
        cy.wait(4000);
    })
})