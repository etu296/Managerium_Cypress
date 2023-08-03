 // Create Advance
 describe("Create Advance from Different office ",()=>{
    // Purchase order with Vat %
    it("should login then go to advance landing and create an advance ",()=>{
        cy.login("01679172828","mgm@Admin");
        cy.createAdvance("20");
    });
});