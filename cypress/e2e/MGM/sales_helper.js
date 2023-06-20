 // Exclusive sales direct delivery

 export const createDirectSalesExclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
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
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };

  // Inclusive sales direct delivery

 export const createDirectSalesInclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/goodsSales");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    // add 1st item
    cy.get(".PrivateSwitchBase-input").eq(0).click({force: true });
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
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    //add discount in amount
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
    cy.wait(1000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };

  // Exclusive sales order

 export const createSalesOrderExclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/salesOrder");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(6).click({force:true});
    cy.wait(2000);
    // add 1st item
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
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".newBtnBackground").eq(1).click({force:true});
    cy.wait(1000);
  };

  
  // Inclusive sales direct delivery

 export const createSalesOrderInclusive = (quantity,rate,discount,VAT,AIT) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.visit("https://mgm.ibos.io/sales/salesOrder");
    cy.wait(1000);
    cy.get('.MuiButtonBase-root').eq(1).click({ force: true });
    cy.wait(1000);
    cy.get(".MuiButtonBase-root").eq(6).click({force:true});
    cy.wait(2000);
    // add 1st item
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
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
    cy.get(".form-control").eq(7).click({force:true}).type(quantity);
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type(rate);
    cy.wait(2000);
    //add discount in amount
    cy.get(".PrivateSwitchBase-input").eq(1).click({force: true });
    cy.wait(1000);
    cy.get(".form-control").eq(9).click({force:true}).type(discount);
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
//  add 2nd item
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-9")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("1");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("1000");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("20");
    cy.wait(2000);
    cy.get(".form-control").eq(11).click({force:true}).type(VAT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);
    // add 3rd item 
    cy.get("#item > div")
    .click({ force: true })
    .get("#react-select-mgm-option-11")
    .type("{enter}",{force: true});
    cy.wait(2000);
    cy.get(".form-control").eq(7).click({force:true}).type("3");
    cy.wait(1000);
    cy.get(".form-control").eq(8).click({force:true}).type("50");
    cy.wait(2000);
    cy.get(".form-control").eq(9).click({force:true}).type("0");
    cy.wait(2000);
    cy.get(".form-control").eq(12).click({force:true}).type(AIT);
    cy.wait(2000);
    cy.get(".btn").eq(6).click({ force: true });
    cy.wait(2000);

    // cy.get(".form-control").eq(36).click({force:true}).type(discount);
    cy.wait(1000);
    cy.get("form").submit();
    cy.wait(1000);

    cy.get(".MuiButtonBase-root").eq(3).click({force:true});
    cy.wait(1000);
    cy.get(".newBtnBackground").eq(1).click({force:true});
    
  };