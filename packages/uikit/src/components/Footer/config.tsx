import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, DiscordIcon, MediumIcon, RedditIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.ecrox.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.ecrox.com/contact-us/telegram",
      },
      {
        label: "SECROX",
        href: "https://docs.ecrox.com/tokenomics/secrox",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://secrox.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.ecrox.com/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.ecrox.com/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.ecrox.com/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "#",
      },
      {
        label: "Documentation",
        href: "#",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@secrox-1/s/secrox/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.ecrox.com/help/faq#is-secrox-safe-has-secrox-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.ecrox.com/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/user/Ecroxchain"
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/ecroxcoin"
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/ecroxchain",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   href: "http://t.me/ecroxchain",
  // },
  // {
  //   label: "Telegram Group",
  //   icon: TelegramIcon,
  //   href: "https://t.me/ecroxchain",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/ecroxchain/",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/@ecroxchain",
  }
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
