describe('Accueil Betagouv', () => {
  it('affiche un titre de page de niveau 1', () => {
    cy.visit('https://beta.gouv.fr')
    cy.findByRole('heading', { level: 1, name: 'Construisons ensemble les services publics numériques de demain'})
        .should('be.visible')
  })
}) 