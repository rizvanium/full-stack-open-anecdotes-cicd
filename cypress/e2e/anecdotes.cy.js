describe('Apecdote app', () => {
  it('Home page can be visited', () => {
    cy.visit(import.meta.env.VITE_BASE_URL)

    const pageTitle = cy.get('.page-title')
    const formTitle = cy.get('.form-title')

    pageTitle.contains('Anecdote app')
    formTitle.contains('create new')
  })

  it('New anecdote can be added', () => {
    cy.resetDb()
    cy.visit(import.meta.env.VITE_BASE_URL)
    const anecdoteText = 'Cypress anecdote addition test'
    cy.get('input[name="anecdote"]').type(anecdoteText)
    cy.get('.primary-button').first().click()
    cy.wait(500)
    cy.contains(anecdoteText)
  })
})
