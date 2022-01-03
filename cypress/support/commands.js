// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath"/>

Cypress.Commands.add('addNumbers', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(4) > .orange > button').should('be.visible').click()
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(5) > .orange > button').should('be.visible').click()
  expect(cy.get('.component-display > div').contains(`18`))
})

Cypress.Commands.add('subtractTwoNumbers', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(3) > .orange > button').should('be.visible').click()
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(5) > .orange > button').should('be.visible').click()
  expect(cy.get('.component-display > div').contains(`0`))
})

Cypress.Commands.add('multiplyTwoNumbers', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(2) > .orange > button').should('be.visible').click()
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(5) > .orange > button').should('be.visible').click()
  expect(cy.get('.component-display > div').contains(`81`))
})

Cypress.Commands.add('divideTwoNumbers', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(1) > .orange > button').should('be.visible').click()
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(5) > .orange > button').should('be.visible').click()
  expect(cy.get('.component-display > div').contains(`1`))
})

Cypress.Commands.add('invalidReturnOndivideByZero', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(1) > .orange > button').should('be.visible').click()
  cy.get('.wide > button').should('be.visible').click()

  cy.get(':nth-child(5) > .orange > button').should('be.visible').click()
  throw new Error("test fails here")

})

Cypress.Commands.add('clearInput', () => {
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(1) > .orange > button').should('be.visible').click()
  cy.get(':nth-child(2) > :nth-child(3) > button').should('be.visible').click()
  cy.get(':nth-child(1) > :nth-child(1) > button').should('be.visible').click()
  expect(cy.get('.component-display > div').contains(`0`))
})