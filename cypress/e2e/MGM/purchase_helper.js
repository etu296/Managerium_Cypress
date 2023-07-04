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
    cy.visit("https://dev-mgm.ibos.io/");
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



//Direct Purchase Payment by cash
export const DirectSupplierPaymentByCash = (quantity,rate,discount,VAT,AIT) => {
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