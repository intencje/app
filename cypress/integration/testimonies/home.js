/// <reference types="cypress" />
describe('/swiadectwa', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('testimonies', '_home', 'Świadectwa')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})

