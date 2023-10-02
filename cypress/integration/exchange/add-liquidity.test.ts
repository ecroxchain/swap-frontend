describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SECROX')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'BUSD')
  })

  it('loads the ECROX and tokens', () => {
    cy.visit('/add/ECROX/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'ECROX')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SECROX')
  })

  it('loads the WECROX and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WECROX')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SECROX')
  })

  it('does not crash if ECROX is duplicated', () => {
    cy.visit('/add/ECROX/ECROX')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'ECROX')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'ECROX')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'SECROX')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'SECROX')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'SECROX')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'BUSD')
    cy.visit('/add/ECROX')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'ECROX')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('redirects /add/ECROX-token to /add/ECROX/token', () => {
    cy.visit('/add/ECROX-0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.url().should('contain', '/add/ECROX/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
  })

  it('redirects /add/token-ECROX to /add/token/ECROX', () => {
    cy.visit('/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8-ECROX')
    cy.url().should('contain', '/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/ECROX')
  })

  it('redirects /add/WECROX to /add/WECROX/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8',
    )
  })

  it('redirects /add/token-WECROX to /add/token/WECROX', () => {
    cy.visit('/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
