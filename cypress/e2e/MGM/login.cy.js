describe("MGM Test Cases ",()=>{
    // it("should be login  with valid info",()=>{
    //     cy.login("01928374657","123456");
      
    // });

    // it("should be create a purchase order",()=>{
    //     cy.login("01928374657","123456");
    //    cy.createPurchaseReceive("1","20");
    // });
    it("should be create a field collection against Haya with 150 tk",()=>{
        cy.login("01928374657","123456");
        cy.createFieldCollection("150");
        cy.collectionReceive();
    });
    it("go to field collection landing page and select 1 row for received amount",()=>{
       
    });


    // it("should be Create a Bank Account,view details & close ",()=>{
    //  cy.login("01928374657","123456");
    //  cy.createBankAccount("Ameena2","0131565561812","NRI001");
    // })

});