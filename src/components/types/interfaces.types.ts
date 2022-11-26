// HEADERS AND NAV BAR

export interface NavigationLink {
  name: string;
  href: string;
}

export interface IconHeaderProps {
  navigationLinks: NavigationLink[];
  iconNavBarItems?: IconNavBarProps[];
  headerBgColor?: string;
  linkClassName: string;
  hoverClassName: string;
  activeLinkClassName: string;
  currentActiveLocation?: string;
  dropdownBgColor?: string;
  dropdownTextColor?: string;
  dropdownBorderColor?: string;
  textClassName?: string;
  companyName?: string;
  logo?: string | undefined;
  logoClassName?: string;
  alt?: string;
  onLinkClick?: () => void;
}

export interface IconNavBarProps {
  icon: any;
  iconLink: string;
  title: string;
  undertext: string;
}

// HERO IMAGE

export interface HeroOneProps {
  image?: string;
  alt?: string;
  heroImageClassName?: string;
  location?: string;
  locationClassName?: string;
  companyName?: string;
  companyNameClassName?: string;
  infoText?: string;
  infoTextClassName?: string;
  contactButtonText?: string;
  contactButtonClassName?: string;
  buttonLink?: string;
}

export interface HeroInfoBarProps {
  heroImageRowItemsClassName?: string;
  heroImageBarItems: string[];
}

// ALERTS, POPUP'S, MODAL'S

export interface AlertPopupProps {
  position: string;
  variant: string;
  variant_color: string;
  icon_color: string;
  text_color: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  alertVisible: boolean;
  closeable?: boolean;
}
