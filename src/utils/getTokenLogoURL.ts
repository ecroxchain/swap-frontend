const getTokenLogoURL = (address: string) => {
  // return `https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/${address}/logo.png`
  return `images/tokens/${address}.png`
}

export default getTokenLogoURL
