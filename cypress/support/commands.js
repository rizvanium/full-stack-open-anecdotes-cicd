Cypress.Commands.add('resetDb', () => {
  cy.request('POST', `${import.meta.env.VITE_BASE_URL}/reset`, {
    anecdotes: [],
  })
})
