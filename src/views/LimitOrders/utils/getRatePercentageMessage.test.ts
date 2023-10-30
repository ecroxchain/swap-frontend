import { JSBI, Price, Token } from '@ecrox/ecroxswap-sdk'
import getRatePercentageDifference from './getRatePercentageDifference'
import { getRatePercentageMessage, PercentageDirection } from './getRatePercentageMessage'

const SECROX = new Token(988207, '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8', 18, 'SECROX', 'SECROX Token')
const BUSD = new Token(988207, '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288', 18, 'BUSD', 'Binance USD')

const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const ONE = JSBI.multiply(JSBI.BigInt(1), EIGHTEEN_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const SEVEN = JSBI.multiply(JSBI.BigInt(7), EIGHTEEN_DECIMALS)
const SEVEN_HUNDRED = JSBI.multiply(JSBI.BigInt(700), EIGHTEEN_DECIMALS)
const ELEVEN = JSBI.multiply(JSBI.BigInt(11), EIGHTEEN_DECIMALS)

const ONE_BUSD_PER_CAKE = new Price(SECROX, BUSD, EIGHTEEN_DECIMALS, ONE)
const FIVE_BUSD_PER_CAKE = new Price(SECROX, BUSD, EIGHTEEN_DECIMALS, FIVE)
const SEVEN_BUSD_PER_CAKE = new Price(SECROX, BUSD, EIGHTEEN_DECIMALS, SEVEN)
const ELEVEN_BUSD_PER_CAKE = new Price(SECROX, BUSD, EIGHTEEN_DECIMALS, ELEVEN)
const SEVEN_HUNDRED_BUSD_PER_CAKE = new Price(SECROX, BUSD, EIGHTEEN_DECIMALS, SEVEN_HUNDRED)

const mockT = (key: string, data?: { percentage?: string }) => {
  return key.includes('%percentage%') ? key.replace('%percentage%', data.percentage) : key
}

describe('limitOrders/utils/getRatePercentageMessage', () => {
  describe.each([
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_CAKE, ELEVEN_BUSD_PER_CAKE),
      ['57.14% above market', PercentageDirection.ABOVE],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_CAKE, FIVE_BUSD_PER_CAKE),
      ['-28.57% below market', PercentageDirection.BELOW],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_CAKE, SEVEN_HUNDRED_BUSD_PER_CAKE),
      ['9,900% above market', PercentageDirection.ABOVE],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_CAKE, ONE_BUSD_PER_CAKE),
      ['-85.71% below market', PercentageDirection.BELOW],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_CAKE, SEVEN_BUSD_PER_CAKE),
      ['at market price', PercentageDirection.MARKET],
    ],
  ])('returns correct message and direction', (percent, expected) => {
    it(`for ${percent.toSignificant(6)} Percent`, () => {
      const [message, direction] = getRatePercentageMessage(percent, mockT)
      expect(message).toBe(expected[0])
      expect(direction).toBe(expected[1])
    })
  })
})
