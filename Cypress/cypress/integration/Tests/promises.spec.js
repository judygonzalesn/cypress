
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('My First Cypress Test', function() {
    it('Open page', function() {
        cy.visit('/');

        // Click
        cy.get('#showDialog1').click();
        
        cy.wait(3000);
  //Assert
  cy.get('#PleaseWaitText').should('have.text', 'Please wait....').then(() => { 
    //Handling Async behavior using then method 
    console.log('Using Log'); 
  })
  cy.log('Using Cypress Log');
})
})

