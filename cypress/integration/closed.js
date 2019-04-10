context("inputTesting", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3333");
  });
  it("close modal", function() {
    cy.get(":nth-child(6) > button").click();
    cy.contains("Cancel").click();
  });
});
