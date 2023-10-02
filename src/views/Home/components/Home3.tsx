import { Flex, Text, Heading, Link, Button } from '@secrox/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import HighPassiveIncome from '../../../../public/images/home/high-passive-Income.png'
import ColoredWordHeading from './ColoredWordHeading'

const Home3 = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const primaryButton = {
    to: '/farms',
    text: 'Explore',
    external: false,
  }
  return (
    <>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-home3"
      >
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <Image src={HighPassiveIncome} priority placeholder="blur" alt={t('SECROX')} />
        </Flex>
        <Flex flex="1" flexDirection="column">
          <ColoredWordHeading color="#141414" text={t('High Passive Income')} />
          {/* <Text color="#000000" fontSize="40px" mb="24px" fontWeight="700">
            {t('Earn passive income with crypto.')}
          </Text> */}
          <Text color="#141414" fontSize="18px" mb="40px" mt="20px">
            {t('So investors using the Ecrox Swap platform just in your grasp get attractive benefits.')}
          </Text>
          <Flex>
            <Button mr="16px">
              <Link external href={primaryButton.to}>
                <Text color="#FFFFFF" bold fontSize="16px">
                  {primaryButton.text}
                </Text>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Home3
