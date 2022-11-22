import React from 'react';
import { NavigationLink } from '../SimpleHeader/SimpleHeader';
import { IconNavBarProps } from '../../App';
export interface IconHeaderProps {
    navigationLinks: NavigationLink[];
    iconNavBarItems?: IconNavBarProps[];
    headerBgColor?: string;
    linkClassName: string;
    hoverClassName: string;
    activeLinkClassName: string;
    currentActiveLocation?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    buttonBorderColor?: string;
    headerTitle?: string;
    logo?: string | undefined;
    logoClassName?: string;
    alt?: string;
    onLinkClick?: () => void;
}
/**
 * Header of ProjectLayout that displays branding and implements a responsive navigation menu
 * that leverages HeadlessUI's `Popover` component.
 */
declare const IconHeader: React.FC<IconHeaderProps>;
export default IconHeader;
