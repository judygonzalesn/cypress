// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Types Of Locator', () => {
    it('Open page', () => {
        cy.visit('/');

        // Click
        cy.get('#showDialog1').click();
        cy.get('#PleaseWaitText').should('have.text', 'Please wait....');
        cy.wait(3000);

        //Print a string to console to show Async nature 
        console.log('HELLO')


    })
})