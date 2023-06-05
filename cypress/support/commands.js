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
import {collectionReceive,createFieldCollection,createPurchaseReceive,createBankAccount,login} from "../e2e/MGM/helper";

Cypress.Commands.add("login", (userId, password) => {
  login(userId, password);
})
Cypress.Commands.add("createBankAccount", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount(accountName,bankAccountNumber,bankShortName);
})
Cypress.Commands.add("createPurchaseReceive", (quantity,rate) => {
  createPurchaseReceive(quantity,rate);
})
Cypress.Commands.add("createFieldCollection", (amount) => {
  createFieldCollection(amount);
})
Cypress.Commands.add("collectionReceive", () => {
  collectionReceive();
})