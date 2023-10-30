import { ChainId, Token } from '@ecrox/ecroxswap-sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

export const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({
  wecrox: new Token(
    MAINNET,
    '0x4C89dC09A6170e0EC41ed1d2fE1D17D9BEeeb3Ca',
    18,
    'WECROX',
    'Wrapped ECROX',
    'https://ecroxscan.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ecrox: new Token(MAINNET, '0x4C89dC09A6170e0EC41ed1d2fE1D17D9BEeeb3Ca', 18, 'ECROX', 'ECROX', 'https://ecroxscan.com/'),
  secrox: new Token(MAINNET, '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8', 18, 'SECROX', 'SECROX', 'https://ecroxscan.com/'),
  
  lazio: new Token(
    MAINNET,
    '0x9dc4Cc360E50051EBaF6Cd34da8AFcD5f1ee2dc5',
    18,
    'LAZIO',
    'LAZIO',
    'https://tether.to/',
  ),
  porto: new Token(
    MAINNET,
    '0x9dc4Cc360E50051EBaF6Cd34da8AFcD5f1ee2dc5',
    18,
    'PORTO',
    'PORTO',
    'https://tether.to/',
  ),
  santos: new Token(
    MAINNET,
    '0x5ac338e348b7229A00d7CB1670F94e621514a4d8',
    18,
    'SANTOS',
    'SANTOS',
    'https://tether.to/',
  ),
  mbox: new Token(
    MAINNET,
    '0xfeb9A7ae1B42E46509cE917CC5B42fF5FF332B88',
    18,
    'MBOX',
    'MBOX',
    'https://tether.to/',
  ),
  dar: new Token(
    MAINNET,
    '0xa885f5BCDA64E5BcC76Df95dB0D2996A54d8a16b',
    18,
    'MBOX',
    'MBOX',
    'https://tether.to/',
  ),


  nusdt: new Token(
    MAINNET,
    '0x45C3dEd9650b98d53ec27DA474D292cdF7B5F738',
    18,
    'USDT',
    'USDT',
    'https://tether.to/',
  ),
  nusd: new Token(
    MAINNET,
    '0x254321De2ba6fD4722d9e275e4b99e4191B93173',
    18,
    'USDC',
    'USDC',
    '',
  ),
  syrup: new Token(
    MAINNET,
    '0xD4e84480993b0a463555DE8999dF54252fbEF953',
    18,
    'SYRUP',
    'SYRUP',
    '',
  ),
  flx: new Token(
    MAINNET,
    '0x5e3FAbb10368997D1e26883FaF9aFC1687d7Ea7A',
    18,
    'DICEX',
    'DICEX',
    '',
  ),
  
  // cbs: new Token(
  //   MAINNET,
  //   '0x3b95bB738447a27eB256DE4Cf2D7727D9595ECb9',
  //   18,
  //   'CBS',
  //   'CARBUNCLES',
  //   '',
  // ),
  // eld: new Token(
  //   MAINNET,
  //   '0xcbD98D548315c321ab05d4fe964b4Dc838CA51cf',
  //   18,
  //   'ELD',
  //   'EMERALD',
  //   '',
  // ),
  // sas: new Token(
  //   MAINNET,
  //   '0x3a945Ccf05001d34208b3336b2735F399f8065CB',
  //   18,
  //   'SAS',
  //   'SARDIUS',
  //   '',
  // ),
  // bel: new Token(
  //   MAINNET,
  //   '0x48177d55a2931372dB6662f92a7Dd33c3D471B19',
  //   18,
  //   'BEL',
  //   'BERYL',
  //   '',
  // ),
  // dai: new Token(
  //   MAINNET,
  //   '0x8c9513EC3075904Edd9423Fbfa4B367085D9080a',
  //   18,
  //   'DAI',
  //   'DAI',
  //   'https://binance.com/',
  // ),
  // btcb: new Token(
  //   MAINNET,
  //   '0x43f5e794C6167a7BdEA2CB930458FB0aE63593bF',
  //   18,
  //   'BTC',
  //   'Bitcoin Token',
  //   'https://bitcoin.org/',
  // ), 
  // zec: new Token(
  //   MAINNET,
  //   '0x7Fd90641AcD65d5cE9a0c54731A54b1d4BaE5d75',
  //   18,
  //   'ZEC',
  //   'Zcash Token',
  //   'https://www.z.cash/',
  // ),
} as const)

export const testnetTokens = defineTokens({
  wecrox: new Token(
    TESTNET,
    '0x4C89dC09A6170e0EC41ed1d2fE1D17D9BEeeb3Ca',
    18,
    'WECROX',
    'Wrapped ECROX',
    'https://ecroxscan.com/',
  ),
  secrox: new Token(
    TESTNET,
    '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
    18,
    'SECROX',
    'SECROX Token',
    'http://ecroxswap.com/',
  ),
  nusd: new Token(
    TESTNET,
    '0x8B92eD4F4A663F75561c452caf4fdA801eFefCCd',
    18,
    'BUSD',
    'SECROX Smart USD',
    '',
  ),
  syrup: new Token(
    TESTNET,
    '0x12f369B5a821f56924970262670b1aA10b0D62fF',
    18,
    'SYRUP',
    'SyrupBar Token',
    'http://ecroxswap.com/',
  ),
  // bake: new Token(
  //   TESTNET,
  //   '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   18,
  //   'BAKE',
  //   'Bakeryswap Token',
  //   'https://www.bakeryswap.org/',
  // ),
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
