/// <reference types="Cypress" />

describe("perform calculation", function () {

  before(function () {
    cy.fixture('testData.json').then(function (testdata) {
      this.testdata = testdata
      cy.visit(this.testdata.url)
    })
  })


  // test for adding two numbers
  it("should add two numbers(9+9)", function () {
    // reference add method from Command.js
    cy.addNumbers()
  })
  // test for subtracting two numbers
  it("should subtract two numbers(9-9)", function () {
    // reference subtract method from Command.js
    cy.subtractTwoNumbers()
  })

  // test for multiplication of two numbers
  it("should multiply two numbers(9*9)", function () {
    // reference multiply method from Command.js
    cy.multiplyTwoNumbers()
  })

  // test for division two numbers
  it("should divide two numbers(9/9)", function () {
    // reference division method from Command.js
    cy.divideTwoNumbers()
  })
  // test for division by zero(error condition)
  it("should return error upon division by zero(9/0)", function () {
    // reference method from Command.js
    cy.invalidReturnOndivideByZero()
  })

  it("should clear input made by the user", function () {
    cy.clearInput()
  })


})
