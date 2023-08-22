 // Create Purchase Cost Estimation
 describe("Create Purchase Cost Estimation ",()=>{
    
    it("should login then go to Purchase Cost Estimation landing and create Purchase Cost Estimation,after create view the Purchase Cost Estimation & edit Purchase Cost Estimation ",()=>{
        cy.devlogin("01679172828","mgm@Admin"); 
        cy.createPurchaseCostEstimation("10","2","3","4","5");
        cy.editPurchaseCostEstimation("2","3","4","5","1","10","200");

    });
});