

//import 'cypress-mochawesome-reporter/register';
import Login from "../PageObjects/Login.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Test Case', () => {
  it('Passed', () => {
    cy.visit("https://coretechautomation.ct.ws/wp-login.php")
    cy.url().should('include', 'https://coretechautomation.ct.ws/wp-login.php')

    cy.fixture('TestData').then((data) => {

      const ln = new Login();
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.setLogin();
    })
  })
})