     //Exclusive  sales order
     describe("sales order Test Cases ",()=>{
        it("should created a Exclusive sales order & view the created sales details",()=>{
            // cy.login("01928374657","123456");
            // cy.createSalesOrderExclusive("1","200","10","10","5");
        });

     //Inclusive  sales order
        it("should created a Inclusive sales order & view the created sales details",()=>{
            cy.login("01928374657","123456");
            cy.createSalesOrderInclusive("1","200","10","10","5");
        });
     });