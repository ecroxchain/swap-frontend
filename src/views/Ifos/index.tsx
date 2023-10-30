import { SubMenuItems } from '@ecrox/uikit'
import { useTranslation } from 'contexts/Localization'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import Hero from './components/Hero'

export const IfoPageLayout = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isExact = router.route === '/ifo'

  return (
    <>
      <PageMeta />
      <SubMenuItems
        items={[
          {
            label: t('Latest'),
            href: '/ifo',
          },
          {
            label: t('Finished'),
            href: '/ifo/history',
          },
        ]}
        activeItem={isExact ? '/ifo' : '/ifo/history'}
      />
      <Hero />
      {children}
    </>
  )
}
