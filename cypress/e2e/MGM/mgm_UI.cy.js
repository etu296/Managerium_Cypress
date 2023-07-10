describe("MGM UI all routes,links Test Cases ",()=>{
    it("should be login  with valid info & go through to the purchase module route to route",()=>{
        cy.login("01928374657","123456");
        cy.wait(1000);
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
        

        });

});
   