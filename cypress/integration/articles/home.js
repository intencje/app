/// <reference types="cypress" />
describe('/artykuly', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('articles', '_home', 'Artykuły / Wszystkie')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

