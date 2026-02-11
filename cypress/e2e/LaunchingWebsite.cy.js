

//import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('CoreTechAutomation', () => {
    it('Passed', () => {
        cy.visit("http://coretechautomation.ct.ws/")
        cy.url().should('include', 'http://coretechautomation.ct.ws/')
    })
})