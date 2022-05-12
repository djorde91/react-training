describe('On all pages', () => {
  it('specific global styles should exists', () => {
    cy.visit('/');
    cy.get('body').should('have.css', 'background-color', 'rgb(29, 31, 40)');
    cy.get('nav').should('have.css', 'background-color', 'rgb(9, 36, 90)');
  });
  it('Only 1 of each elements should be present: html, body, header, nav', () => {
    cy.visit('/');
    cy.get('html').should('have.length', 1);
    cy.get('body').should('have.length', 1);
    cy.get('header').should('have.length', 1);
    cy.get('nav').should('have.length', 1);
  });
});
