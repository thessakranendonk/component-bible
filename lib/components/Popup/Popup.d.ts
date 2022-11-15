import React from 'react';
export interface PopupProps {
    position: string;
    variant: string;
    title: string;
    closeable?: boolean;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
