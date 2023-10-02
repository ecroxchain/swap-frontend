describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288&outputCurrency=0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288&outputCurrency=0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8',
    )
  })
})
