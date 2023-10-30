import { Flex, Text, Heading } from '@ecrox/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import ImgBecomingAInvestor from '../../../../public/images/home/home-becoming-a-investor.png'
import ColoredWordLastHeading from './ColoredWordLastHeading'

const Home2 = () => {
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
        id="homepage-home2"
      >
        <Flex flex="1" flexDirection="column">
          <ColoredWordLastHeading color="#FFFFFFFF" text={t('Becoming an Investor')} />
          <Text color="#FFFFFFFF" fontSize="18px" mb="24px" mt="20px">
            {t('So investors using the ECROX Swap platform just in your grasp get attractive benefits')}
          </Text>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <Image src={ImgBecomingAInvestor} priority placeholder="blur" alt={t('SECROX')} />
        </Flex>
      </Flex>
    </>
  )
}

export default Home2
