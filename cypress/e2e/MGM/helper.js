  export const login = (userId, password) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });
    cy.viewport(1920, 1080);
    cy.visit("https://devmgm.ibos.io/");
        cy.get("#loginMobileNo").eq(0).click({force:true}).type(userId);
        cy.get("#loginPassword").eq(0).click({force:true}).type(password);
        cy.get("form").submit();
        cy.wait(1000);
        cy.get("#branchList > div")
        .click({ force: true })
        .get("#react-select-mgm-option-1")
        .type("{enter}",{force: true});
        cy.wait(2000);
  };
  export const createBankAccount = (accountName,bankAccountNumber,bankShortName) => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on("uncaught:exception", (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false;
      }
    });

    cy.visit("https://devmgm.ibos.io/accounts/bankAccount");
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