/// <reference types="cypress" />
describe("/kontakt", () => {
  it("Should pass basic health check", () => {
    cy.healthCheck("contact", "_home", "Kontakt");
  });

  it("Should not have AMP link", () => {
    cy.get('link[rel="amphtml"]').should("not.exist");
  });
});
