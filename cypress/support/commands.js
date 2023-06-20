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
import {viewAccountingJournal,ApproveFullReturn,viewReturndetails,approveSalesOrder,returndeliverSalesOrder,deliverSalesOrder,approveSalesQuotation,orderFromQuotation,editsalesQuotation,createSalesQuotationLine,createSalesQuotationGross,collectionReceive,createFieldCollection,createPurchaseReceive,createBankAccount,login} from "../e2e/MGM/helper";

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
Cypress.Commands.add("createSalesQuotationGross", (quantity,rate,grossDiscount) => {
  createSalesQuotationGross (quantity,rate,grossDiscount);
})
Cypress.Commands.add("createSalesQuotationLine", (quantity1,rate1,lineDiscount1,quantity2,rate2,lineDiscount2,quantity3,rate3,lineDiscount3) => {
  createSalesQuotationLine(quantity1,rate1,lineDiscount1,quantity2,rate2,lineDiscount2,quantity3,rate3,lineDiscount3);
})
Cypress.Commands.add("editsalesQuotation", () => {
  editsalesQuotation();
})
Cypress.Commands.add("orderFromQuotation", () => {
  orderFromQuotation();
})
Cypress.Commands.add("deliverSalesOrder", () => {
  deliverSalesOrder();
})
Cypress.Commands.add("returndeliverSalesOrder", () => {
  returndeliverSalesOrder();
})
Cypress.Commands.add("viewReturndetails", () => {
  viewReturndetails();
})
Cypress.Commands.add("approveSalesQuotation", () => {
  approveSalesQuotation();
})
Cypress.Commands.add("approveSalesOrder", () => {
  approveSalesOrder();
})
Cypress.Commands.add("ApproveFullReturn", () => {
  ApproveFullReturn();
})
Cypress.Commands.add("viewAccountingJournal", (dateToEnter) => {
  viewAccountingJournal(dateToEnter);
})
//ipos commands for test case
import{iposlogin}from "../e2e/MGM/ipos_helper";

Cypress.Commands.add("iposlogin",(userId, password)=>{
  iposlogin(userId, password);
})

 // sales direct delivery
import{createDirectSalesInclusive,createDirectSalesExclusive}from "../e2e/MGM/sales_helper";

Cypress.Commands.add("createDirectSalesExclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesExclusive(quantity,rate,discount,VAT,AIT);
})

Cypress.Commands.add("createDirectSalesInclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesInclusive(quantity,rate,discount,VAT,AIT);
})