/// <reference types="cypress" />
describe("/login", () => {
  it("Should pass basic health check", () => {
    cy.healthCheck("login", "_home", "Logowanie / Rejestracja");
  });

  it("Should not have AMP link", () => {
    cy.get('link[rel="amphtml"]').should("not.exist");
  });
});
