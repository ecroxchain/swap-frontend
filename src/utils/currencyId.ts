import { Currency, ETHER, Token } from '@danielvindax/ecroxswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ECROX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
