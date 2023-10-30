import { Price } from '@ecrox/ecroxswap-sdk'
/**
 * Helper to multiply a Price object by an arbitrary amount
 */
export const multiplyPriceByAmount = (price: Price, amount: number, significantDigits = 18) => {
  if (!price) {
    return 0
  }

  return parseFloat(price.toSignificant(significantDigits)) * amount
}
