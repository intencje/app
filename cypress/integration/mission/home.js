/// <reference types="cypress" />
describe('/misja', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('mission', '_home', 'Misja')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

