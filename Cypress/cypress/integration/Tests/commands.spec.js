/// <reference types="cypress-xpath" />
describe('Types Of Locator', ()=> {
    it('Open page', ()=> {
        cy.visit('/')
        
        // Click
        .get('#showDialog1').click();
        cy.get('#PleaseWaitText')
        .should('have.text', 'Please wait....');

                
        // Click with modified timeout
        cy.get('#showDialog1').click();
        cy.get('#PleaseWaitText', {timeout: 5000})
        .should('have.text', 'Please wait....');

        //timeout globally
        //cypress run --config defaultCommandTimeout=10000
        //cypress.json
        //https://docs.cypress.io/guides/references/configuration#Runner-Specific-Overrides


        // Right Click
        cy.get('#rightclickspace').rightclick();
        cy.contains('#RightClickSaveText', 'Save')
        .should('be.visible');

        // Double Click
        cy.get('#rightclickmenu').dblclick();

        //Type
        cy.get('#TextFields > :nth-child(1) > input').type('Regina')
        .should('have.value', 'Regina')
        cy.get('#TextFields > :nth-child(2) > input').type('Phalanga')
        .should('have.value', 'Phalanga')

        //Clear
        .clear()
        .should('not.have.value')
        .type('Phalange')
        .should('have.value', 'Phalange')

        //Check
        cy.get('#Checkbox1').check()
        .should('be.checked');
        cy.get('#Checkbox2').check()
        .should('be.checked');

        //Uncheck
        cy.get('#Checkbox1').uncheck()
        .should('not.be.checked');

        //Select
        //value (Text: Ashely)
        cy.get('#namesDropdown').select('7')
        //text (value: four )
        cy.get('#namesDropdown').select('Rose')

        //Trigger
        //focus
        cy.get('#showDialog1').trigger('focus')
        .focus()

        //Long press event for slider
        
        cy.get('.ui-slider-handle')
        .trigger('mousedown', {which: 1,pageX: 254, pageY: 313})
        .trigger('mouseup')
        cy.get('#sliderNumber')
        .should('have.value', '10')

    })
});