/// <reference types="cypress" />
describe('/uzytkownicy', () => {
    it('Powinna się wyświetlać', () => {
        cy.fixture('sitemap').then(page => {
          cy.visit(page.users._home)
        })
    })
  })