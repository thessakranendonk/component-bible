import React from 'react';
export interface PopupProps {
    position: string;
    variant: string;
    variant_color: string;
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    alertVisible: boolean;
    closeable?: boolean;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
