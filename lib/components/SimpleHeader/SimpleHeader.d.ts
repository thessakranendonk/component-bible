import React from 'react';
export interface NavigationLink {
    name: string;
    href: string;
}
export interface SimpleHeaderProps {
    navigationLinks: NavigationLink[];
    bgColor: string;
    link: string;
    hover: string;
    active: string;
    activeLink?: string;
    headerTitle?: string;
    logo?: string | undefined;
    alt?: string;
    onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    containerPaddingStyle?: string;
}
declare const SimpleHeader: React.FC<SimpleHeaderProps>;
export default SimpleHeader;
