it("adds a todo", () => {
  cy.request({
    url: "api/todos",
  })
    .its("body")
    .should("deep.contain", {
      title: "Write REST API",
      completed: false,
    });
});
