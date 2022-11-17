import React from 'react';

export interface ButtonProps {
  text: string;
  button_color: string;
  text_color: string;
  extraCssClass?: string;
}

const SimpleButton: React.FC<ButtonProps> = ({ text, button_color, text_color, extraCssClass }) => {
  return (
    <div className="w-full inset-64">
      <button className={`${button_color} ${text_color} px-4 py-2 rounded-3xl p4 text-center font-xl ${extraCssClass}`}>
        {text}
      </button>
    </div>
  );
};

export default SimpleButton;
