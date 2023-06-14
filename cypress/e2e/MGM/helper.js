  //login
  export const login = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://mgm.ibos.io/");
        cy.get("#loginMobileNo").eq(0).click({force:true}).type(userId);
        cy.get("#loginPassword").eq(0).click({force:true}).type(password);
        cy.get("form").submit();
        cy.wait(1000);
        // cy.get("#branchList > div")
        // .click({ force: true })
        // .get("#react-select-mgm-option-0")
        // .type("{enter}",{force: true});
        cy.wait(2000);
  };
  //create bank account
  export const createBankAccount = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://dev-mgm.ibos.io/accounts/bankAccount");
    cy.get(".btn").eq(2).click({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(0).click({force:true}).type(accountName);
    cy.get("#bankName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#branchName > div")
    .click({ force: true })
    .get("#react-select-mgm-option-12")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get("#bankAccountType > div")
    .click({ force: true })
    .get("#react-select-mgm-option-5")
    .type("{enter}",{force: true});
    cy.wait(2000);

    cy.get(".form-control").eq(1).click({force:true}).type(bankAccountNumber); 
    cy.wait(1000);
    cy.get(".form-control").eq(2).click({force:true}).type(bankShortName);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.get(".newBtnBackground").eq(0).click({force:true});
    cy.wait(2000);
    cy.get(".MuiButton-root").eq(0).click({force:true});

  };
//create direct purchase receive
  export const createPurchaseReceive = (quantity,rate) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://dev-mgm.ibos.io/purchase/goodsReceive");
        cy.get("#demo-positioned-button").eq(0).click({force:true});
        cy.get("#supplier > div")
        .click({ force: true })
        .get("#react-select-mgm-option-4")
        .type("{enter}",{force: true});
        cy.wait(2000);
        cy.get("#item > div")
        .click({ force: true })
        .get("#react-select-mgm-option-2")
        .type("{enter}",{force: true});
        cy.wait(2000);
        cy.get(".form-control").eq(5).click({force:true}).type(quantity);
        cy.wait(1000);
        cy.get(".form-control").eq(6).click({force:true}).type(rate);
        cy.wait(2000);
        cy.get(".btn").eq(5).click({ force: true });
        // cy.get(".btn").eq(5).should('be.disabled').click({force: true});
        cy.wait(2000);
        cy.get("form").submit();
  };
// Create field collection
  export const createFieldCollection = (amount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://dev-mgm.ibos.io/sales/fieldCollection");
    cy.wait(1000);
       cy.get(".btn").eq(2).click({force:true});
       cy.wait(1000);
       cy.get("#office > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(2000);
       cy.get("#customer > div")
       .click({ force: true })
       .get("#react-select-mgm-option-5")
       .type("{enter}",{force: true});
       cy.wait(2000);
       cy.get("#collectionType > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(2000);
       cy.get(".form-control").eq(3).click({force:true}).type(amount);
       cy.wait(1000);
       cy.get('.btn').eq(3).click({force:true});
       cy.wait(1000);
       cy.get("form").submit();
  };
 //field Collection deposite
  export const collectionReceive = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://dev-mgm.ibos.io/sales/fieldCollection");
    cy.wait(1000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(4).click({force:true});
    cy.wait(2000);
    
  };
  //sales quotation gross discount
  export const createSalesQuotationGross = (quantity,rate,grossDiscount) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/salesQuotation");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-5")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-8")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);

    cy.get(".form-control").eq(36).click({force:true}).type(grossDiscount);
    cy.wait(1000);
    cy.get("form").submit();
    
  };
  //sales quotation line discount only 
  export const createSalesQuotationLine = (quantity1,rate1,lineDiscount1,quantity2,rate2,lineDiscount2,quantity3,rate3,lineDiscount3) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/salesQuotation");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    cy.get("#customer > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(1000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-8")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity1);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate1);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(lineDiscount1);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity2);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate2);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(lineDiscount2);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type(quantity3);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate3);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(lineDiscount3);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
    
  };
  //Edit Sales Quotation
  export const editsalesQuotation = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
   cy.visit("https://mgm.ibos.io/sales/salesQuotation");
   cy.wait(1000);
   cy.get(".newBtnBackground").eq(3).click({force:true});
   cy.wait(2000);
   cy.get("form").submit();
   cy.wait(2000);
  };
  //sales order from sales quotation
  export const orderFromQuotation = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
   cy.visit("https://mgm.ibos.io/sales/salesOrder");
   cy.wait(1000);
   cy.get(".MuiButtonBase-root").eq(1).click({force:true});
   cy.wait(2000);
   cy.get(".MuiButtonBase-root").eq(6).click({force:true});
   cy.wait(2000);
   cy.get(".PrivateSwitchBase-input").eq(0).check({force:true});
   cy.wait(2000);
   cy.get("#salesQuotation > div")
   .click({ force: true })
   .get("#react-select-mgm-option-0")
   .type("{enter}",{force: true});
   cy.wait(2000);
   cy.get("form").submit();
   cy.wait(2000);
  };
  //fully deliver the created sales order
  export const deliverSalesOrder = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.sales_collection_action').eq(0).click({force:true});
    cy.wait(2000);
    cy.get("#office > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get("#warehouse > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".PrivateSwitchBase-input").eq(0).check({force:true});
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});
    cy.wait(2000);
  };
    //Full Return the created sales order
    export const returndeliverSalesOrder = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
      cy.visit("https://mgm.ibos.io/sales/salesReturn");
      cy.wait(1000);
      cy.get('.text-decoration-underline ').eq(0).click({force:true});
      cy.wait(2000);
      cy.get("#office > div")
         .click({ force: true })
         .get("#react-select-mgm-option-0")
         .type("{enter}",{force: true});
      cy.wait(2000);
      cy.get("#warehouse > div")
         .click({ force: true })
         .get("#react-select-mgm-option-0")
         .type("{enter}",{force: true});
      cy.wait(2000);
      cy.get("form").submit();
      cy.wait(2000);
    };
    //view return details
    export const viewReturndetails = () => {
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
      Cypress.on("uncaught:exception", (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
          return false;
        }
      });
      cy.visit("https://mgm.ibos.io/sales/salesReturn");
      cy.wait(1000);
      cy.get('.MuiButtonBase-root').eq(3).click({force:true});
      cy.wait(2000);
      cy.get('.MuiSvgIcon-root').eq(26).click({force:true});
      cy.wait(2000);
    };
  //sales quotation approval
  export const approveSalesQuotation = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(4).click({force:true});
    cy.wait(2000);
  };
  //sales order approval
  export const approveSalesOrder = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(4).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(6).click({force:true});
    cy.wait(2000);
  };