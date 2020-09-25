/// <reference types="cypress" />

describe('/modlitwy', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('prayers', '_home', 'Modlitwy / Wszystkie')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

