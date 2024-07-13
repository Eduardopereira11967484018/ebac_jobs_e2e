describe('', () => {
  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
  })

  it('Deve levar o usuario ate o formulario de inscrição', () => {
    cy.get('a[href="/inscricao"]').click()
    cy.get('input').should('have.length', 7)
  })
  it('Deve levar o usuario ate o formulario ', () => {
    cy.get('.Vagas_vagasLink__DeFkk').first().click()
    cy.get('.input[mame="nome-completo"]').type('eduardo')
    cy.get('.input[mame="email"]').type('eduardo123@test.com')
    cy.get('.input[mame="telefone"]').type('11 3333 666')
    cy.get('.input[mame="endereco"]').type(
      'rua jest, bairro. cypress, sao paulo'
    )
    // cy.get('.input[mame="nome-completo"]').type('eduardo')
    cy.get('.input["outros"]').type('eduardo')

    cy.on('window:alert', (conteudo) => {
      expect(conteudo).to.equal('Obrigado por se inscrever!')
    })
  })
})
