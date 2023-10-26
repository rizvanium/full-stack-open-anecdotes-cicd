describe('Apecdote app', () => {
  it('Home page can be visited', () => {
    cy.visit('')

    const pageTitle = cy.get('.page-title')
    const formTitle = cy.get('.form-title')

    pageTitle.contains('Anecdote app')
    formTitle.contains('create new')
  })

  it('New anecdote can be added', () => {
    cy.resetDb()
    cy.visit('')
    const anecdoteText = 'Cypress anecdote addition test'
    cy.get('input[name="anecdote"]').type(anecdoteText)
    cy.get('.primary-button').first().click()
    cy.wait(500)
    cy.contains(anecdoteText)
  })
})
