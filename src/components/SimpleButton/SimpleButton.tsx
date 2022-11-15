import React from 'react';

export interface ButtonProps {
  text: string;
}

const SimpleButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="w-full inset-64">
      <button className="bg-black text-purple-700 rounded-lg p4 text-center font-xl">{text}</button>
    </div>
  );
};

export default SimpleButton;
