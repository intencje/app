/// <reference types="cypress" />

describe('/funkcjonalnosci', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('features', '_home', 'Funkcjonalności')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})


