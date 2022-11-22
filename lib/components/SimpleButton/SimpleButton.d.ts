import React from 'react';
export interface ButtonProps {
    text: string;
    button_color: string;
    text_color: string;
    extraCssClass?: string;
}
declare const SimpleButton: React.FC<ButtonProps>;
export default SimpleButton;
