/// <reference types="cypress" />
describe('/regulamin', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('tos', '_home', 'Regulamin')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

