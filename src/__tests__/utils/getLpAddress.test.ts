import { Token, ChainId } from '@ecrox/ecroxswap-sdk'
import getLpAddress from 'utils/getLpAddress'

const CAKE_AS_STRING = '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8'
const BUSD_AS_STRING = '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288'
const CAKE_AS_TOKEN = new Token(ChainId.MAINNET, CAKE_AS_STRING, 18)
const BUSD_AS_TOKEN = new Token(ChainId.MAINNET, BUSD_AS_STRING, 18)
const CAKE_BUSD_LP = '0x804678fa97d91B974ec2af3c843270886528a9E6'

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(CAKE_AS_STRING, BUSD_AS_STRING)).toBe(CAKE_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(CAKE_AS_STRING, BUSD_AS_TOKEN)).toBe(CAKE_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(CAKE_AS_TOKEN, BUSD_AS_TOKEN)).toBe(CAKE_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(CAKE_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(CAKE_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
