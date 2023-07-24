//login to dev mgm
export const devlogin = (userId, password) => {
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
        cy.get("#branchList > div")
        .click({ force: true })
        .get("#react-select-mgm-option-2")
        .type("{enter}",{force: true});
        cy.wait(2000);
  };



//Direct Purchase Payment by cash
export const DirectSupplierPaymentByCash = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/purchase/invoice");
    cy.wait(1000);
    // click payment by invoice($) icon
    cy.get(".MuiSvgIcon-root").eq(27).click({force:true});
    //select office
    cy.get("#office > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(2000);
    //click on check box as cash 
    cy.get('.PrivateSwitchBase-input').eq(0).check({force:true});
    //select cash type
    cy.get("#cash > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //type payment amount
    cy.get('.form-control').eq(3).click({force:true}).type("100");
    cy.wait(2000);
    //click on add button
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    //submit form
    cy.get("form").submit();
    cy.wait(2000);
   //view pain bill
   cy.get('.MuiButtonBase-root ').eq(4).click({force:true});
   cy.wait(2000);
  };

  
//Direct Purchase Payment by bank
export const DirectSupplierPaymentByBank = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://dev-mgm.ibos.io/purchase/invoice");
    cy.wait(1000);
    // click payment by invoice($) icon
    cy.get(".MuiSvgIcon-root").eq(27).click({force:true});
    //select office
    cy.get("#office > div")
       .click({ force: true })
       .get("#react-select-mgm-option-0")
       .type("{enter}",{force: true});
       cy.wait(2000);
    //click on check box as bank
    cy.get('.PrivateSwitchBase-input').eq(1).check({force:true});
    //select cash type
    cy.get("#bank > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //type instrument/cheque no.
    cy.get('.form-control').eq(1).click({force:true}).type("1");
    cy.wait(2000);
    //type payment amount
    cy.get('.form-control').eq(5).click({force:true}).type("100");
    cy.wait(2000);
    //click on add button
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    //submit form
    cy.get("form").submit();
    cy.wait(2000);
    //view pain bill
    cy.get('.MuiButtonBase-root ').eq(4).click({force:true});
    cy.wait(2000);
  };
  // Purchase order with Vat %
  export const createPurchaseOrder = (quantity,rate,VAT,quantity1,rate1,VAT1) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/purchaseOrder");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root ').eq(1).click({force:true});
    cy.wait(1000);
    cy.get('.MuiButtonBase-root ').eq(4).click({force:true});
    cy.wait(1000);
    //select supplier
    cy.get("#supplier > div")
    .click({ force: true })
    .get("#react-select-mgm-option-4")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //add item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-0")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(4).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(5).click({force:true}).type(rate);
    cy.wait(2000);
    //vat in %
    // cy.get(".form-control").eq(7).click({force:true}).type(VAT);
    // cy.wait(2000);
    //vat in amount
    cy.get(".PrivateSwitchBase-input").eq(4).check({force:true});
    cy.wait(1000);
    cy.get(".form-control").eq(7).click({force:true}).type(VAT);
    cy.wait(2000);

    cy.get(".btn").eq(5).click({ force: true });
    //add 2nd
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-2")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(4).click({force:true}).type(quantity1);
    cy.wait(1000);
    cy.get(".form-control").eq(5).click({force:true}).type(rate1);
    cy.wait(2000);
    //vat in %
    cy.get(".form-control").eq(7).click({force:true}).type(VAT1);
    cy.wait(2000);
    cy.get(".btn").eq(5).click({ force: true });
    cy.wait(2000);
    cy.get("form").submit();
    cy.wait(2000);
  };

  //approve purchase order
 export const approvePurchaseOrder = () => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/commonapproval");
    cy.wait(1000);
    cy.get('.rowItem').eq(0).click({force:true});
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(4).click({force:true});
    cy.wait(2000);
  };

  // Full Recevie item from created purchase order
  export const receivePurchaseOrder = (quantity,rate,VAT,quantity1,rate1,VAT1) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://mgm.ibos.io/purchase/goodsReceive");
    cy.wait(1000);
    cy.get('.MuiSvgIcon-root ').eq(27).click({force:true});
    cy.wait(1000);
    cy.get(".PrivateSwitchBase-input").eq(0).check({force:true});
    cy.wait(1000);
    //add batch
    cy.get('.MuiSvgIcon-root ').eq(31).click({force:true});
    cy.wait(1000);
    cy.get('.form-control').eq(6).click({ force: true }).type('Batch-1', {force: true});
    cy.wait(2000);
    cy.get('.form-control').eq(7).click({ force: true }).type('100',{force:true});
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiButtonBase-root').eq(2).click({force:true});
    cy.wait(2000);
    //submit
    cy.get('.btn').eq(2).click({force:true});
    cy.wait(2000);
  };

  //view received purchase order
  export const viewReceivePurchaseOrder = (quantity,rate,VAT,quantity1,rate1,VAT1) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    }); 
    cy.visit("https://mgm.ibos.io/purchase/goodsReceive");
    cy.wait(1000);    
    cy.get('.MuiButtonBase-root ').eq(3).click({force:true});
    cy.wait(1000);
    //click  on view icon
    cy.get('.MuiSvgIcon-root ').eq(28).click({force:true});
    cy.wait(1000);
  };

  // purchase payment against the GRN & supplier
 

  //view accounting journal in dev
  export const viewDevAccountingJournal = (dateToEnter) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });     
    cy.visit("https://dev-mgm.ibos.io/accounts/businessTransaction");
    cy.wait(1000);
    cy.get("#office > div")
    .click({ force: true })
    .get("#react-select-mgm-option-1")
    .type("{enter}",{force: true});
    cy.wait(2000);
    //pick input date type
    cy.get('.form-control').eq(0).click({ force: true });
    cy.wait(2000);
    cy.get('input[name="fromDate"]').clear().type(dateToEnter);
    cy.wait(2000);
    cy.get('.form-control').eq(1).click({ force: true });
    cy.wait(2000);
    cy.get('input[name="toDate"]').clear().type(dateToEnter);
    //pick input date type
    cy.wait(2000);
    cy.get('.btn').eq(3).click({force:true});
    cy.wait(2000);
    cy.get('.MuiTableRow-root').eq(1).click({force:true});
    cy.wait(3000);
    cy.get('.MuiButtonBase-root').eq(3).click({force:true});
    cy.wait(1000);
  };