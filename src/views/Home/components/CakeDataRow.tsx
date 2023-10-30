import { Flex, Heading, Skeleton, Text } from '@ecrox/uikit'
import Balance from 'components/Balance'
import cakeAbi from 'config/abi/cake.json'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useEffect, useState } from 'react'
import { usePriceCakeBusd } from 'state/farms/hooks'
import styled from 'styled-components'
import { formatBigNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { multicallv2 } from 'utils/multicall'
import useSWR from 'swr'
import { SLOW_INTERVAL } from 'config/constants'
import { BigNumber } from '@ethersproject/bignumber'
import { getCakeVaultV2Contract } from 'utils/contractHelpers'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean; noDesktopBorder?: boolean }>`
  flex-direction: column;
  // background: #000000;
  border-radius: 0;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 10px 16px;
           border-right: 1px #262626 solid;
         }
       `
      : `border-right: 1px #262626 solid;
         padding: 10px 8px;
         ${theme.mediaQueries.sm} {
           padding: 10px 16px;
         }
       `}

  ${({ noDesktopBorder, theme }) =>
    noDesktopBorder &&
    `${theme.mediaQueries.md} {
           padding: 10px;
          //  border-left: none;
         }
       `} 
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'a c'
    'b d';

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-areas:
      'a b c d';
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const emissionsPerBlock = 14.25

/**
 * User (Planet Finance) built a contract on top of our original manual CAKE pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/secrox-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/secrox/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */
const planetFinanceBurnedTokensWei = BigNumber.from('0')
const cakeVault = getCakeVaultV2Contract()

const CakeDataRow = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const {
    data: { cakeSupply, burnedBalance, circulatingSupply } = {
      cakeSupply: 0,
      burnedBalance: 0,
      circulatingSupply: 0,
    },
  } = useSWR(
    loadData ? ['cakeDataRow'] : null,
    async () => {
      const totalSupplyCall = { address: tokens.secrox.address, name: 'totalSupply' }
      const burnedTokenCall = {
        address: tokens.secrox.address,
        name: 'balanceOf',
        params: ['0x000000000000000000000000000000000000dEaD'],
      }
      const [tokenDataResultRaw, totalLockedAmount] = await Promise.all([
        multicallv2(cakeAbi, [totalSupplyCall, burnedTokenCall], {
          requireSuccess: false,
        }),
        cakeVault.totalLockedAmount(),
      ])
      const [totalSupply, burned] = tokenDataResultRaw.flat()

      const totalBurned = planetFinanceBurnedTokensWei.add(burned)
      const circulating = totalSupply.sub(totalBurned.add(totalLockedAmount))

      return {
        cakeSupply: totalSupply && burned ? +formatBigNumber(totalSupply.sub(totalBurned)) : 0,
        burnedBalance: burned ? +formatBigNumber(totalBurned) : 0,
        circulatingSupply: circulating ? +formatBigNumber(circulating) : 0,
      }
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(circulatingSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  return (
    <Grid>
      {/* <Flex flexDirection="column" style={{ gridArea: 'a' }}>
        <Text color="textSubtle">{t('Circulating Supply')}</Text>
        {circulatingSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={circulatingSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </Flex> */}
      <StyledColumn noDesktopBorder style={{ gridArea: 'a' }}>
        <Text color="#EC233B" mb="10px">{t('Total supply')}</Text>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" color="#ffffffff" bold value={cakeSupply} />
        ) : (
          <>
            <div ref={observerRef} />
            <Skeleton height={24} width={126} my="4px" />
          </>
        )}
      </StyledColumn>
      {/* <StyledColumn noMobileBorder style={{ gridArea: 'c' }}>
        <Text color="textSubtle">{t('Max Supply')}</Text>

        <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={750000000} />
      </StyledColumn> */}
      <StyledColumn noDesktopBorder style={{ gridArea: 'b' }}>
        <Text color="#EC233B" mb="10px">{t('Market cap')}</Text>
        {mcap?.gt(0) && mcapString ? (
          <Text fontSize="24px" color="#ffffffff">{t('$%marketCap%', { marketCap: mcapString })}</Text>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn noDesktopBorder style={{ gridArea: 'c' }}>
        <Text color="#EC233B" mb="10px">{t('Burned to date')}</Text>
        {burnedBalance ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" color="#ffffffff" bold value={burnedBalance} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn noDesktopBorder style={{ gridArea: 'd' }}>
        <Text color="#EC233B" mb="10px">{t('Current emissions')}</Text>

        <Text fontSize="24px" color="#ffffffff">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Text>
      </StyledColumn>
    </Grid>
  )
}

export default CakeDataRow
