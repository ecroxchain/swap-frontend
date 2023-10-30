import { JSBI, Token, TokenAmount } from '@ecrox/ecroxswap-sdk'
import getPriceForOneToken from './getPriceForOneToken'

const SECROX = new Token(988207, '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8', 18, 'SECROX', 'SECROX Token')
const BUSD = new Token(988207, '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288', 18, 'BUSD', 'Binance USD')
const DOGE = new Token(988207, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'Binance-Peg Dogecoin')

const EIGHT_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(8))
const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const ZERO = JSBI.multiply(JSBI.BigInt(0), EIGHTEEN_DECIMALS)
const ONE = JSBI.multiply(JSBI.BigInt(1), EIGHTEEN_DECIMALS)
const ONE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(1), EIGHT_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const FIVE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(5), EIGHT_DECIMALS)

describe('limitOrders/utils/getPriceForOneToken', () => {
  describe.each([
    [new TokenAmount(SECROX, ONE), new TokenAmount(BUSD, ONE), '1'],
    [new TokenAmount(SECROX, FIVE), new TokenAmount(BUSD, FIVE), '1'],
    [new TokenAmount(SECROX, ONE), new TokenAmount(BUSD, FIVE), '5'],
    [new TokenAmount(SECROX, FIVE), new TokenAmount(BUSD, ONE), '0.2'],
    [new TokenAmount(DOGE, ONE_EIGHT_DEC), new TokenAmount(BUSD, ONE), '1'],
    [new TokenAmount(DOGE, FIVE_EIGHT_DEC), new TokenAmount(BUSD, FIVE), '1'],
    [new TokenAmount(DOGE, ONE_EIGHT_DEC), new TokenAmount(BUSD, FIVE), '5'],
    [new TokenAmount(DOGE, FIVE_EIGHT_DEC), new TokenAmount(BUSD, ONE), '0.2'],
    [new TokenAmount(SECROX, ZERO), new TokenAmount(BUSD, ONE), undefined],
    [new TokenAmount(SECROX, ONE), new TokenAmount(BUSD, ZERO), undefined],
  ])(`returns correct price`, (input, output, expected) => {
    it(`for ${input.toSignificant(6)} ${input.currency.symbol} -> ${output.toSignificant(6)} ${
      output.currency.symbol
    }`, () => {
      const price = getPriceForOneToken(input, output)
      expect(price?.toSignificant(6)).toBe(expected)
    })
  })
})
