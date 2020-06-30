/// <reference types="cypress" />
describe('/szczesc-boze', () => {
    it('Powinna się wyświetlać', () => {
        cy.fixture('sitemap').then(page => {
          cy.visit(page.blessednessOfGod._home)
        })
    })
  })