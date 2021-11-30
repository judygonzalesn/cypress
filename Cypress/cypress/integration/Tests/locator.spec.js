/// <reference types="cypress-xpath" />
describe('Types Of Locator', ()=> {
    it('Open page', ()=> {
        cy.visit('/')

        // by Tag Name
        cy.get('Button')

        // by ID
        cy.get('#showDialog1')

        // by ClassName
        cy.get('.btn-lg')

        // by Attribute name
        cy.get('[data-target]')

        // by Attribute name and Attribute value
        cy.get('[data-target="#myModal"]')

        // by Class value
        cy.get('[class="btn btn-primary btn-lg"]')

        // by Tag name and Attribute name with Attribute value
        cy.get('button[data-target="#myModal"]')

        //by two different Attributes or with Attribute value
        cy.get('[data-target="#myModal"][data-toggle]')
        .click()

        //by Tag name, Attribute with value and Class name
        cy.get('button[aria-label="Close"].close')

         //xpath using plugin
        cy.xpath('//*[contains(@class, "modal-title") or contains(@id, "myModalLabel")]');
    })
});