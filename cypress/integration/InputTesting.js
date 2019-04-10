context("inputTesting", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3333");
  });

  it("send message", function() {
    cy.get(":nth-child(6) > button").click();
    cy.get("textarea").type(
      "Please contact administrator because your account susspended"
    );
    cy.contains("Send").click();
  });
});
