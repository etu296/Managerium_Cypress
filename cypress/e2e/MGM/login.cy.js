describe("MGM Test Cases ",()=>{
    it("should be login  with valid info",()=>{
        cy.login("01928374657","123456");
       // Assert text
        cy.get('.details').should('be.visible').and('contain', 'Expense');
        cy.wait(1000);
        //coppy a text fro UI
        cy.get('.row-title').eq(0).invoke('text').then((text) => {
            const copiedText = text.trim();
            cy.log('Copied text:', copiedText);
         
          cy.wait(1000);
          cy.visit("https://mgm.ibos.io/sales/salesOrder");
          cy.wait(1000);
          //paste the copied text
          cy.get('.MuiInputBase-input').eq(0).click({force:true}).type(copiedText);
          cy.wait(2000);
        });

    });
    it("should be Create a Bank Account,view details & close ",()=>{
        //  cy.login("01928374657","123456");
        //  cy.createBankAccount("Ameena2","0131565561812","NRI001");
        })
    it("should be create a purchase order",()=>{
    //     cy.login("01928374657","123456");
    //    cy.createPurchaseReceive("1","20");
    });
    it("should be create a field collection against a customer with 150 tk",()=>{
        // cy.login("01928374657","123456");
        // cy.createFieldCollection("150");
        // cy.collectionReceive();
    });
    it("go to field collection landing page and select 1 row for received amount",()=>{
       
    });
   

});