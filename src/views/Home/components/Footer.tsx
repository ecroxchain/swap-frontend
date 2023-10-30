import styled from 'styled-components'
import { Flex, Heading, Text, Link, useMatchBreakpointsContext } from '@ecrox/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'
import ColoredWordLastHeading from './ColoredWordLastHeading'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'SECROX flying on the bottom' },
    { src: '1-left', alt: 'SECROX flying on the left' },
    { src: '1-top', alt: 'SECROX flying on the top' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'SECROX flying on the bottom' },
    { src: '2-top', alt: 'SECROX flying on the top' },
    { src: '2-right', alt: 'SECROX flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { isTablet, isDesktop } = useMatchBreakpointsContext()

  return (
    <>
      {/* <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper> */}
      {/* {(isTablet || isDesktop) && (
        <FloatingPancakesWrapper>
          <TopLeftImgWrapper>
            <CompositeImage {...topLeftImage} maxHeight="256px" />
          </TopLeftImgWrapper>
          <BottomRightImgWrapper>
            <CompositeImage {...bottomRightImage} maxHeight="256px" />
          </BottomRightImgWrapper>
        </FloatingPancakesWrapper>
      )} */}
      <Wrapper>
        {/* <ColoredWordLastHeading color="#000000" text={t('Ready For ECROX?')} /> */}
        <Text color="#000000" fontSize="40px" mb="24px" fontWeight="700">
            {t('Start in seconds.')}
          </Text>
        <Text textAlign="center" color="#000000">
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text textAlign="center" color="#000000">
          {t('No registration needed.')}
        </Text>
        <Text mb="24px" bold color="#EC233B" mt="24px">
          {t('Learn how to start')}
        </Text>

        {/* <Link external href="https://docs.ecrox.com/">
          {t('Connect Wallet')}
        </Link> */}
        {!account && <ConnectWalletButton mt="24px" />}
      </Wrapper>
    </>
  )
}

export default Footer
