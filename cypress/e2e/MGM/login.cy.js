describe("login ",()=>{
    it("should be login  with valid info",()=>{
        // cy.login("01928374657","123456");
        // cy.visit("https://devmgm.ibos.io/purchase/goodsReceive");
        // cy.get("#demo-positioned-button").eq(0).click({force:true});
        // cy.get("#supplier > div")
        // .click({ force: true })
        // .get("#react-select-mgm-option-4")
        // .type("{enter}",{force: true});
        // cy.wait(2000);
        // cy.get(".css-b62m3t-container > div").eq(7)
        // .click({ force: true }).debug()
        // .get(".css-abc123-option-5")
        // .click({ force: true });
        // cy.get('.css-b62m3t-container > div')
        // .eq(7)
        // .click({force:true})
        // .type("vanilla");
        // click({ force: true });
        //  .debug()
        //  .get('.css-qc6sy-singleValue').should('be.visible')
        //  .should('have.attr', 'aria-expanded', 'false') // Assert the initial state
        //  .click({ force: true })
        //  .should('have.attr', 'aria-expanded', 'true')
    });

    it("should be Create a Bank Account,view details & close ",()=>{
     cy.login("01928374657","123456");
     cy.createBankAccount("Ameena2","0131565561812","NRI001");
    })

});