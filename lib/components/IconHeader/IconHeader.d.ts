import React from 'react';
import { IconHeaderProps } from '../types/interfaces.types';
/**
 * Header of ProjectLayout that displays branding and implements a responsive navigation menu
 * that leverages HeadlessUI's `Popover` component.
 */
declare const IconHeader: React.FC<IconHeaderProps & {
    onMenuOpen: () => void;
    onMenuClose: () => void;
    isPanelOpen: boolean;
}>;
export default IconHeader;
