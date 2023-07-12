//Purchase
export const PurchaseUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //rfq
     cy.visit("https://mgm.ibos.io/purchase/rfq");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //QuotationEntry
     cy.visit("https://mgm.ibos.io/purchase/quotationEntry");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //cs
     cy.visit("https://mgm.ibos.io/purchase/cs");
     cy.wait(1000);
     
     //purchaseOrder
     cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
      //goodsReceive
      cy.visit("https://mgm.ibos.io/purchase/goodsReceive");
      cy.wait(1000);
      cy.get(".MuiButtonBase-root").eq(1).click({force:true});
      cy.wait(1000);
       //purchaseReturn
     cy.visit("https://mgm.ibos.io/purchase/purchaseReturn");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
      //purchase payment
      cy.visit("https://mgm.ibos.io/purchase/invoice");
      cy.wait(1000);
      cy.get(".MuiButtonBase-root").eq(1).click({force:true});
      cy.wait(1000);
       //purchase Analytics
     cy.visit("https://mgm.ibos.io/purchase/purchaseAnalytics");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //purchase Report
    cy.visit("https://mgm.ibos.io/purchase/purchase");
    cy.wait(1000);
     
  };

  //Sales
export const SalesUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //sales Quotation
     cy.visit("https://mgm.ibos.io/sales/salesQuotation");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //sale sOrder
     cy.visit("https://mgm.ibos.io/sales/salesOrder");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //Sales Delivery
     cy.visit("https://mgm.ibos.io/sales/goodsSales");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //sales Return
     cy.visit("https://mgm.ibos.io/sales/salesReturn");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //Sales Collection
    cy.visit("https://mgm.ibos.io/sales/SalesCollection");
    cy.wait(1000);
    //sales target
    cy.visit("https://mgm.ibos.io/sales/target");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);
    //Sales Report
    cy.visit("https://mgm.ibos.io/sales/sales");
    cy.wait(1000);
    //sales field Collection
    cy.visit("https://mgm.ibos.io/sales/fieldCollection");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(1).click({force:true});
    cy.wait(1000);
    //sales Analytics
    cy.visit("https://mgm.ibos.io/sales/salesAnalytics");
    cy.wait(1000);
     
  };

   //Account
export const AccountUI = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
     cy.viewport(1920, 1080);
     //Bank Account
     cy.visit("https://mgm.ibos.io/accounts/bankAccount");
     cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     //Chart Of Accounts
     cy.visit("https://mgm.ibos.io/accounts/expenseIncomeHead");
     cy.wait(1000);
     cy.get(".btn").eq(2).click({force:true});
     cy.wait(1000);
     //Accounting Journal
     cy.visit("https://mgm.ibos.io/accounts/businessTransaction");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
     //Budget Landing
     cy.visit("https://mgm.ibos.io/accounts/budgetSetup");
     cy.wait(1000);
     cy.get(".MuiButtonBase-root").eq(1).click({force:true});
     cy.wait(1000);
    //Expense/Advance
    cy.visit("https://mgm.ibos.io/accounts/expenseOrAdvance");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(1).click({force:true});
    cy.wait(1000);
    //Project
    cy.visit("https://mgm.ibos.io/accounts/Project");
    cy.wait(1000);
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    //financial Report
    cy.visit("https://mgm.ibos.io/accounts/financialReport");
    cy.wait(1000);
    //others Report
    cy.visit("https://mgm.ibos.io/accounts/othersReport");
    cy.wait(1000);
    //fund Transfer
    cy.visit("https://mgm.ibos.io/accounts/fundTransfer");
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(0).click({force:true});
    cy.wait(1000);
    //cheque Setup
    cy.visit("https://mgm.ibos.io/accounts/chequeSetup");
    cy.wait(1000);
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
     
  };