
const tests = require('../fixtures/new.json')

describe('GitHub Login Testing:', () => {

    describe('Testing With Valid And Invalid Input:', () => {
        
        beforeEach(() => {
            cy.visit('https://github.com/')
        });

        tests.forEach(test =>{

            it(test.name, () => {

                cy.get('.Button-label').click()
                cy.wait(1000)
                cy.get('.mr-lg-3 > .HeaderMenu-link').click()
                cy.wait(1000)
                cy.get('#login_field').type(test.email)
                cy.get('#password').type(test.password)
                cy.get('.btn').click()

                if (test.type === 'Valid') {

                    cy.wait(1000)
                    cy.get('.mr-0.d-none > .details-overlay > .Header-link > .dropdown-caret').click()
                    cy.wait(1000)
                    cy.get('.logout-form > .dropdown-item').click()

                }else{

                    cy.get('#login_field').should('be.visible')
                    cy.get('#password').should('be.visible')
                    cy.get('.btn').should('be.visible')

                }
                
            });

             
        })


    });

});