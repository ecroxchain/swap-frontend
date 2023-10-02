import { FooterLinkType } from '@secrox/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.ecrox.com/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.ecrox.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.ecrox.com/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.ecrox.com/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://secrox.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.ecrox.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.ecrox.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.ecrox.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.ecrox.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.ecrox.com/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.ecrox.com/help/faq',
      },
      {
        label: t('Careers'),
        href: 'https://docs.ecrox.com/hiring/become-a-chef',
      },
    ],
  },
]
