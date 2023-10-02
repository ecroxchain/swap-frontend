import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
   {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'SECROX',
    lpAddresses: {
      6552: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
      988207: '0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wecrox,
  },
  {
    pid: 2,
    // v1pid: 1,
    lpSymbol: 'SECROX-ECROX LP',
    lpAddresses: {
      6552: '0x04a87d67A487C38089736C738aEBc13D6B981c76',
      988207: '0x815f7168557f31BF88c73E5F6aacC7220d731A97',
    },
    token: serializedTokens.secrox,
    quoteToken: serializedTokens.wecrox,
  },
  {
    pid: 3,
    // v1pid: 2,
    lpSymbol: 'USDC-ECROX LP',
    lpAddresses: {
      6552: '0xc8EdeC730CC6aBb57c213c840633071164357357',
      988207: '0xCc5fc35483f63C68C0C57267902582Ee72Eda826',
    },
    token: serializedTokens.nusd,
    quoteToken: serializedTokens.wecrox,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 4,
    // v1pid: 3,
    lpSymbol: 'USDT-ECROX LP',
    lpAddresses: {
      6552: '0x0DC8b02c393B3FD37dA5B3944Ad9d301377C5849',
      988207: '0x097D0Ed049e8102c801d286d278F16C320FA88Eb',
    },
    token: serializedTokens.nusdt,
    quoteToken: serializedTokens.wecrox,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'ETH-ECROX LP',
  //   lpAddresses: {
  //     6552: '',
  //     988207: '0xD30916af2D1E8F5da477057A95958e724528bcCa',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wecrox,
  // },


  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
