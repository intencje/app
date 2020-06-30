/// <reference types="cypress" />
describe("/ (intentions)", () => {
  it("Should pass basic health check", () => {
    cy.healthCheck("intentions", "_home", "Intencje / Wszystkie");
  });

  it("Should not have AMP link", () => {
    cy.get('link[rel="amphtml"]').should("not.exist");
  });
});

//.matchImageSnapshot()
//.get('#login').matchImageSnapshot();
// .get('link[rel="amphtml"]').should('not.exist')
// .get('link[rel="canonical"]')
// .should(($canonical) => {
//   expect($canonical).to.have.length(1)
// })
// .get('script[type="application/ld+json"]')
// .should(($jsonld) => {
//   expect($jsonld).to.have.length(1)
//   expect($jsonld).to.contain('https://www.facebook.com/intencjepl')
// })
// .get('app-intention-card')
// .should(($card) => {
//   expect($card).to.have.length(5)
// })
