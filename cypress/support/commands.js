Cypress.Commands.add('resetDb', () => {
  cy.readFile('./db-test.json', 'utf-8').then((jsonData) => {
    jsonData.anecdotes = []
    cy.writeFile('./db-test.json', JSON.stringify(jsonData), 'utf-8')
  })
})
