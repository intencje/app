/// <reference types="cypress" />
describe('/wiadomosci', () => {
    it('Powinna się wyświetlać', () => {
        cy.fixture('sitemap').then(page => {
          cy.visit(page.messages._home)
        })
    })
  })