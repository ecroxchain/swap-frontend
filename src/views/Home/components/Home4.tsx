import { Flex, Text, Heading, Link, Button } from '@secrox/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import Image from 'next/image'
import CommunityVote from '../../../../public/images/home/Community-Vote.png'
import ColoredWordLastHeading from './ColoredWordLastHeading'

const Home4 = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const primaryButton = {
    to: '/swap',
    text: 'Buy SECROX',
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
        mb="50px"
        id="homepage-home4"
      >
        <Flex flex="1" flexDirection="column">
          <Heading color="#FFFFFFFF" scale="xl">
            {t('ECROX Community')}
          </Heading>
          <ColoredWordLastHeading color="#F4E17A" text={t('Vote')} />
          <Text color="#FFFFFFFF" fontSize="18px" mb="20px" mt="20px">
            {t('ECROX token is at the heart of the ECROX ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!')}
          </Text>
          <Flex mt="20px">
            <Button mr="16px">
              <Link external href={primaryButton.to}>
                <Text color="#FFFFFF" bold fontSize="16px">
                  {primaryButton.text}
                </Text>
              </Link>
            </Button>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          ml={'50px'}
        >
          <Image src={CommunityVote} priority placeholder="blur" alt={t('SECROX')} />
        </Flex>
      </Flex>
    </>
  )
}

export default Home4
