it('class, id, attr', () => {
    cy.visit('/mini-apps/shapes.html');
    cy.get('.square')
    cy.get('#circle')
    cy.get('[data-cy=triangle]')
    cy.get('div')
    cy.get('h1')
    cy.contains('Shapes')
    cy.contains('h1','Shapes')
})