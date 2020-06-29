/// <reference types="cypress" />

describe('/czytania-na-dzis', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('readings', '_home', 'Czytania na dziś')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

