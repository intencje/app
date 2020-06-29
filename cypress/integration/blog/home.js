/// <reference types="cypress" />
describe('/blog', () => {
  it('Should pass basic health check', () => {
    cy.healthCheck('blog', '_home', 'Blog')
  })

  it('Should not have AMP link', () => {
    cy.get('link[rel="amphtml"]').should('not.exist')
  })
})
