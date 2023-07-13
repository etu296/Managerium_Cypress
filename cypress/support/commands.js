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
// import{iposlogin}from "../e2e/MGM/ipos_helper";

// Cypress.Commands.add("iposlogin",(userId, password)=>{
//   iposlogin(userId, password);
// })
//ipos commands for test case
import{ApproveItemRequest,createItemRequest }from "../e2e/MGM/item_request_helper";

Cypress.Commands.add("createItemRequest",(RequestQuantity)=>{
  createItemRequest(RequestQuantity);
})
Cypress.Commands.add("ApproveItemRequest",()=>{
  ApproveItemRequest();
})

 // sales direct delivery
import{PartialdeliverSalesOrder,createSalesOrderExclusive,createSalesOrderInclusive,createDirectSalesInclusive,createDirectSalesExclusive}from "../e2e/MGM/sales_helper";

Cypress.Commands.add("createDirectSalesExclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesExclusive(quantity,rate,discount,VAT,AIT);
})

Cypress.Commands.add("createDirectSalesInclusive",(quantity,rate,discount,VAT,AIT)=>{
  createDirectSalesInclusive(quantity,rate,discount,VAT,AIT);
})
//sales order
Cypress.Commands.add("createSalesOrderExclusive",(quantity,rate,discount,VAT,AIT)=>{
  createSalesOrderExclusive(quantity,rate,discount,VAT,AIT);
})

Cypress.Commands.add("createSalesOrderInclusive",(quantity,rate,discount,VAT,AIT)=>{
  createSalesOrderInclusive(quantity,rate,discount,VAT,AIT);
})
//partial sales delivery
Cypress.Commands.add("PartialdeliverSalesOrder",(deliverQuantity1,deliverQuantity2,deliverQuantity3)=>{
  PartialdeliverSalesOrder(deliverQuantity1,deliverQuantity2,deliverQuantity3);
})

import{devlogin,DirectSupplierPaymentByCash,DirectSupplierPaymentByBank,viewDevAccountingJournal}from "../e2e/MGM/purchase_helper";
//dev login

Cypress.Commands.add("devlogin", (userId, password) => {
  devlogin(userId, password);
})

//direct purchase payment by cash
Cypress.Commands.add("DirectSupplierPaymentByCash",()=>{
DirectSupplierPaymentByCash();
})
//direct purchase payment by bank
Cypress.Commands.add("DirectSupplierPaymentByBank",()=>{
  DirectSupplierPaymentByBank();
  })
  //view Dev Accounting Journal
Cypress.Commands.add("viewDevAccountingJournal",(dateToEnter)=>{
  viewDevAccountingJournal(dateToEnter);
  })

import{createBankAccount1,createBankAccount2,createBankAccount3,createBankAccount4,createBankAccount5,createBankAccount6,createBankAccount7,createBankAccount8}from "../e2e/MGM/bank_helper";
Cypress.Commands.add("createBankAccount1", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount1(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount2", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount2(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount3", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount3(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount4", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount4(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount5", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount5(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount6", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount6(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount7", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount7(accountName,bankAccountNumber,bankShortName);
})

Cypress.Commands.add("createBankAccount8", (accountName,bankAccountNumber,bankShortName) => {
  createBankAccount8(accountName,bankAccountNumber,bankShortName);
})
//mgm UI Commands
import{PurchaseUI,SalesUI,AccountUI,InventoryUI}from "../e2e/MGM/Mgm_UI_Helper";
Cypress.Commands.add("PurchaseUI",()=>{
  PurchaseUI();
})
Cypress.Commands.add("SalesUI",()=>{
  SalesUI();
})
Cypress.Commands.add("AccountUI",()=>{
  AccountUI();
})
Cypress.Commands.add("InventoryUI",()=>{
  InventoryUI();
})
