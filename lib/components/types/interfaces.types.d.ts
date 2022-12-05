/// <reference types="react" />
import { LatLngExpression } from 'leaflet';
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
export interface MapProps {
    company: string;
    location: string;
    lat: number;
    lon: number;
    description?: string;
}
export interface MapLocationDetails {
    mapLocationDetails: MapProps[];
    mapCenter: LatLngExpression;
    zoomNumber: number;
    mapClassName?: string;
    mapSize: string;
}
export interface MapBusinessHoursProps {
    day: string;
    hours: string;
}
export interface MapContactProps {
    address?: string;
    email?: string;
    phone?: string;
    fax?: string;
}
export interface MapContactInfo {
    businessHours: MapBusinessHoursProps[];
    mapContactInfo: MapContactProps;
}
export interface MapUiProps {
    textClassName: string;
    h2ClassName: string;
    isMapInfoPanelOpen: boolean;
    hoverClassName?: string;
    panelButtonClassName?: string;
    onMapOpen: () => void;
    onMapClose: () => void;
}
export interface CarouselProps {
    images: string[];
    alt: string;
    carouselClassName?: string;
}
