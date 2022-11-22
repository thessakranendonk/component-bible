import React from 'react';
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
declare const AlertPopup: React.FC<AlertPopupProps>;
export default AlertPopup;
