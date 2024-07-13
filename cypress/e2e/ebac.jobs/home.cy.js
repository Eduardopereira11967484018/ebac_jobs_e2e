describe('test the and home', () => {
  it('Deve renderizar 4 Vagas', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.ListaVagas_vagas__kFDvd > li').should('have.length', 4)
  })
  it('Deve renderizar 4 Vagas', () => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    cy.get('.FormVagas_form__OyaJ8').type('fullstack')
    cy.get('.FormVagas_btnPesquisa___+mYmV').click()
  })
})
