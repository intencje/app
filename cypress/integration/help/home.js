/// <reference types="cypress" />
describe('/pomoc', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('help', '_home', 'Pomoc')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

