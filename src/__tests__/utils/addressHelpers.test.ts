import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    988207: '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8',
    6552: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
  }

  it(`get address for mainnet (chainId 988207)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '988207'
    const expected = address[988207]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 6552)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '6552'
    const expected = address[6552]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[988207]
    expect(getAddress(address)).toEqual(expected)
  })
})
