// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {

// acessar aplicação já logado
cy.setCookie( 
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0sQ9z2nUeEpI1Jlt22Mxy2yAU79VSO7YnSnPOKvAc2OqioPTGTcnRm4v3KX2yfKhqBmL6AHFyeQdeMEERxm74l%2FrX4i5713LykMEBY8xhpENxklgvFoPUrU5iZHxxFlHsDdTqkp8Eil1fPzMTmvM%2FUGnXqvbv3x%2BZldUX3GDe4yWBdg%2FdybRThF00znCRDfDi32wbIsHecOFhDQnRKKYPFPH7j7jSVbHHAq4927yfjiADA3jgIa6PH95q20eqr6R%2BLmE9X0IkR0QTvrTEjC%2B0CNSEcJ%2FgDf5SyYjrYRfsPhGuW7Kp61iq7TQSXNt%2BllABL53BegM8SFDRQiIME6GZSldxrUdglH%2FQqFMf2rAlWO1ASXb%2FkK5wb8eOaV2or0J7aoAjwBfpXVSsaNLRy%2BYll8%3D000313'
 )
})