import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Menu as UikitMenu } from '@secrox/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import useTheme from 'hooks/useTheme'
import { useFarmFromLpSymbol, useLpTokenPrice, usePriceCakeBusd } from 'state/farms/hooks'
import { usePhishingBannerManager } from 'state/user/hooks'
import tokens, { serializeTokens } from 'config/constants/tokens'
import { farmsConfig } from 'config/constants'
import { BigNumber } from '@ethersproject/bignumber'
import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'
import { CHAIN_ID } from '../../config/constants/networks'
import BuyBNB from './BuyBNB'

const Menu = (props) => {
  const { isDark, setTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  //  for find lpTokenPriceInUsd of CAKE_BNB
  const serializedTokens = serializeTokens();
  
  const lpToken = farmsConfig.find(item => item.token.symbol === serializedTokens.secrox.symbol && item.quoteToken.symbol === serializedTokens.wecrox.symbol);
  
  // useFarmFromLpSymbol(lpToken.lpSymbol);
  const lpTokenPriceInUsd = useLpTokenPrice(lpToken.lpSymbol)
  const bnbToken = tokens.wecrox;

  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <UikitMenu
      linkComponent={(linkProps) => {
        return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
      }}
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings color="#000" />}
      banner={showPhishingWarningBanner && typeof window !== 'undefined' && <PhishingWarningBanner />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={menuItems}
      subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={getFooterLinks}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy SECROX')}
      buyBNBComponent={<BuyBNB currency={bnbToken} lpTokenPriceInUsd={lpTokenPriceInUsd} buyBNBLabel={t('Buy SECROX')} />}
      {...props}
    />
  )
}

export default Menu
