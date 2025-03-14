it('class, id, attr', () => {
    cy.visit('/mini-apps/shapes.html');
    cy.get('.square')
    cy.get('#circle')
    cy.get('[data-cy=triangle]')
})