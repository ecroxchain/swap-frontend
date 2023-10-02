import { ReactElement } from "react";
import { Language } from "../LangSelector/types";
import { FlexProps } from "../Box";
import { SvgProps } from "../Svg";

export type FooterLinkType = {
  label: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};

export type FooterProps = {
  items: FooterLinkType[];
  buyCakeLabel: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  buyBNBComponent?: ReactElement;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
} & FlexProps;

type SocialLinkItemType = {
  label: string;
  href: string;
};

export type SocialLinkType = {
  label: string;
  icon: React.FC<SvgProps>;
  href?: string;
  items?: SocialLinkItemType[];
};
