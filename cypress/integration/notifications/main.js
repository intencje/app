/// <reference types="cypress" />
describe('/powiadomienia', () => {
    it('Powinna się wyświetlać', () => {
        cy.fixture('sitemap').then(page => {
          cy.visit(page.notifications._home)
        })
    })
  })