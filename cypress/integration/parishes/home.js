/// <reference types="cypress" />

describe('/parafie', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('parishes', '_home', 'Parafie')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

