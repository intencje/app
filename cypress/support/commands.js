import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

Cypress.Commands.add("healthCheck", (component, path, title) => {
  cy.fixture("sitemap").then(page => {
    const url = page[component][path];
    cy.visit(url)
      .get('[data-test="main-tabs"]')
      .should("be.visible")
      .get('[data-test="main-menu"]')
      .should("be.visible")
      .get('[data-test="secondary-menu"]')
      .should("be.visible")
      .viewport("iphone-6")
      .get('[data-test="main-menu"]')
      .should("be.hidden")
      .get('[data-test="secondary-menu"]')
      .should("be.hidden")
      .title()
      .should("eq", title)
      .get('[data-test="page-title"]')
      .contains(title)
      .get('link[rel="canonical"]')
      .then(canonical => {
        expect(canonical[0].href).to.contain(Cypress.config().baseUrl + url);
      });
  });
});

addMatchImageSnapshotCommand();

// addMatchImageSnapshotCommand({
//   failureThreshold: 0.03, // threshold for entire image
//   failureThresholdType: 'percent', // percent of image or number of pixels
//   customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
//   capture: 'viewport', // capture viewport in screenshot
// });
