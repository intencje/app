/// <reference types="cypress" />

describe('/tagi', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('tags', '_home', 'Tagi')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

