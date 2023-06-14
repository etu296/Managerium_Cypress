describe("MGM Test Cases ",()=>{
    // it("should be login  with valid info",()=>{
    //     cy.login("01928374657","123456");
      
    // });
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
    it("should be create a sales quotation with 3 item & gross discount only & Approve the sales quotation",()=>{
    //    cy.login("01928374657","123456");
    //    cy.createSalesQuotationGross ("2","00","200");
    //    cy.approveSalesQuotation();
    });
    it("should be create a sales quotation with 3 item & line discount only then edit Approve the sales quotation",()=>{
        // cy.login("01928374657","123456");
        // cy.createSalesQuotationLine("2","00","10","1","1000","200","3","50","50");
        // cy.editsalesQuotation();
        // cy.approveSalesQuotation();
     });

    it(" Approve the created sales quotation",()=>{
        // cy.login("01928374657","123456");
        // cy.approveSalesQuotation();
     });
    
    it("create sales order from quotation",()=>{
        // cy.login("01928374657","123456");
        // cy.orderFromQuotation();
     });

    it(" Approve the created sales order",()=>{
        cy.login("01928374657","123456");
        cy.approveSalesOrder();
     });
   
    it("fully deliver the created sales order",()=>{
        cy.login("01928374657","123456");
        cy.deliverSalesOrder();
        
     });
});