describe('On 404 pages', () => {
  it('Specific texts should be present on page', () => {
    cy.visit('/notfound');
    cy.findAllByText(/learn react/i).should('have.length', 1);
    cy.get('#notFoundPage').find('code').contains('404');
  });
});
