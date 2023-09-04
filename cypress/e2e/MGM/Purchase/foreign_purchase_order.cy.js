 //Foreign Purchase order 
 describe(" Foreign Purchase order Test Cases ",()=>{
   
    it("should go to foreign purchase order & create a FPO ",()=>{
        cy.login("01679172828","mgm@Admin123");
       cy.createForeignPurchaseOrder(); 
    });

});