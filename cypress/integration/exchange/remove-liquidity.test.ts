describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/remove/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('ecrox-secrox remove', () => {
    cy.visit('/remove/ECROX/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'ECROX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SECROX')
  })

  it('secrox-ecrox remove', () => {
    cy.visit('/remove/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/ECROX')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SECROX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'ECROX')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SECROX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if ECROX is duplicated', () => {
    cy.visit('/remove/ECROX/ECROX')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'ECROX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'ECROX')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'SECROX')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SECROX')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'SECROX')
  })
})
