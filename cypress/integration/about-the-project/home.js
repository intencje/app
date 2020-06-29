/// <reference types="cypress" />

describe("/o-projekcie", () => {
  it("Should pass basic health check", () => {
    cy.healthCheck("aboutTheProject", "_home", "O projekcie");
  });

  it("Should not have AMP link", () => {
    cy.get('link[rel="amphtml"]').should("not.exist");
  });
});
