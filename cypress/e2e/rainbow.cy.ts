it('class, id, attr', () => {
    cy.visit('/mini-apps/rainbow.html');
    cy.get('li').first()
    cy.get('li').eq(2)
    cy.get('ul').find('.green')
    cy.get('ul').prev()
})