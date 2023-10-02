import { Box, Button, CakePrice, Flex, Text } from '@secrox/uikit'
import { CurrencyLogo } from 'components/Logo'

const BuyBNB = ({ currency, lpTokenPriceInUsd, buyBNBLabel }) => {
  return (
    <Flex order={[1, null, 2]} mb={['24px', null, '0']} justifyContent="space-between" alignItems="center">
      <Flex mr="20px">
        <CurrencyLogo currency={currency} size="34px" style={{ marginRight: '8px',height: '22px' }} />
        {/* <Text color="contrast" ml="10px" bold>{`${lpTokenPriceInUsd.toFixed(8)}`}</Text> */}
      </Flex>
      <Button
        as="a"
        href="/swap?inputCurrency=0x6e32F26C48A1155bE3Ae90017320c6B615Bac3c8&outputCurrency=ECROX"
        target="_blank"
        scale="sm"
        // endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
        style={{ color: '#ffffff' }}
      >
        {buyBNBLabel}
      </Button>
    </Flex>
  )
}

export default BuyBNB
