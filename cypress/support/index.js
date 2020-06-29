import "./commands";

let consoleErrors;

beforeEach(() => {
  cy.on("window:before:load", win => {
    if (win.console.error.restore) {
      win.console.error.restore();
    }
    consoleErrors = cy.spy(win.console, "error");
  });
});

afterEach(() => {
  consoleErrors ? expect(consoleErrors).not.to.be.called : false;
});
