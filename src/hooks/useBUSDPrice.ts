import { Currency, currencyEquals, JSBI, Price } from '@ecrox/ecroxswap-sdk'
import tokens from 'config/constants/tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { multiplyPriceByAmount } from 'utils/prices'
import { wrappedCurrency } from '../utils/wrappedCurrency'
import { PairState, usePairs } from './usePairs'

const { wecrox: WBNB, nusd } = tokens

/**
 * Returns the price in BUSD of the input currency
 * @param currency currency to compute the BUSD price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WBNB, wrapped) ? undefined : currency, chainId ? WBNB : undefined],
      [wrapped?.equals(nusd) ? undefined : wrapped, nusd],
      [chainId ? WBNB : undefined, nusd],
    ],
    [chainId, currency, wrapped],
  )
  const [[bnbPairState, bnbPair], [busdPairState, busdPair], [busdBnbPairState, busdBnbPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle wbnb/bnb
    if (wrapped.equals(WBNB)) {
      if (busdPair) {
        const price = busdPair.priceOf(WBNB)
        return new Price(currency, nusd, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle nusd
    if (wrapped.equals(nusd)) {
      return new Price(nusd, nusd, '1', '1')
    }

    const bnbPairBNBAmount = bnbPair?.reserveOf(WBNB)
    const bnbPairBNBBUSDValue: JSBI =
      bnbPairBNBAmount && busdBnbPair ? busdBnbPair.priceOf(WBNB).quote(bnbPairBNBAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the nusd pair
    if (busdPairState === PairState.EXISTS && busdPair && busdPair.reserveOf(nusd).greaterThan(bnbPairBNBBUSDValue)) {
      const price = busdPair.priceOf(wrapped)
      return new Price(currency, nusd, price.denominator, price.numerator)
    }
    if (bnbPairState === PairState.EXISTS && bnbPair && busdBnbPairState === PairState.EXISTS && busdBnbPair) {
      if (busdBnbPair.reserveOf(nusd).greaterThan('0') && bnbPair.reserveOf(WBNB).greaterThan('0')) {
        const bnbBusdPrice = busdBnbPair.priceOf(nusd)
        const currencyBnbPrice = bnbPair.priceOf(WBNB)
        const busdPrice = bnbBusdPrice.multiply(currencyBnbPrice).invert()
        return new Price(currency, nusd, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, bnbPair, bnbPairState, busdBnbPair, busdBnbPairState, busdPair, busdPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.secrox)
  return cakeBusdPrice
}

export const useBUSDCurrencyAmount = (currency: Currency, amount: number): number | undefined => {
  const { chainId } = useActiveWeb3React()
  const busdPrice = useBUSDPrice(currency)
  const wrapped = wrappedCurrency(currency, chainId)
  if (busdPrice) {
    return multiplyPriceByAmount(busdPrice, amount, wrapped.decimals)
  }
  return undefined
}

export const useBUSDCakeAmount = (amount: number): number | undefined => {
  const cakeBusdPrice = useCakeBusdPrice()
  if (cakeBusdPrice) {
    return multiplyPriceByAmount(cakeBusdPrice, amount)
  }
  return undefined
}

export const useBNBBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wecrox)
  return bnbBusdPrice
}
