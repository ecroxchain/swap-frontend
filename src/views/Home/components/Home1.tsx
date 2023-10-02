import { Flex, Heading, Text } from '@secrox/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import bunnyImage from '../../../../public/images/home/home-1.png'

const Home1 = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xl" color="#000000" mb="40px">
            {t('Ecrox Swap The famous decentralized platform on Ecrox blockchain.')}
          </Heading>
          <Text color="#000000" fontSize="18px" mb="24px">
            {t('The first Equity Crowdfunding platform built using Ecrox smart chain technology.')}
          </Text>
          <Flex>{!account && <ConnectWalletButton mr="8px" />}</Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <Image src={bunnyImage} priority placeholder="blur" alt={t('SECROX')} />
        </Flex>
      </Flex>
    </>
  )
}

export default Home1
