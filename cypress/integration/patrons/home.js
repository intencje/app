/// <reference types="cypress" />

describe('/patroni', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('patrons', '_home', 'Patroni / Wszyscy')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})


