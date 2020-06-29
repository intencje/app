/// <reference types="cypress" />
describe('/ustawienia', () => {
    it('Powinna się wyświetlać', () => {
        cy.fixture('sitemap').then(page => {
          cy.visit(page.settings._home)
        })
    })
  })