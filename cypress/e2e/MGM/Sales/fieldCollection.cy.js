     //Field collection
     describe("Field collection Test Cases ",()=>{
        it("should created a Field collection & view the created Field collection details & deposite the collected bill by cash",()=>{
            cy.login("01928374657","123456");
            // using loop for create multiple field collection in one time
            for(let i=0; i<5; i++)
            {
            cy.createFieldCollection("10");
            }
            cy.collectionReceive();
        });

 
     });