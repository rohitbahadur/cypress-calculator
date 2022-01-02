/// <reference types="Cypress" />

describe("perform calculation", function () {

  before(function () {
    cy.fixture('testData.json').then(function (testdata) {
      this.testdata = testdata
      cy.visit(this.testdata.url)
    })
  })


  it("should add two numbers(9+9)", function () {
    cy.addNumbers()
  })

  it("should subtract two numbers(9-9)", function () {
    cy.subtractTwoNumbers()
  })

  it("should multiply two numbers(9-9)", function () {
    cy.multiplyTwoNumbers()
  })


})
