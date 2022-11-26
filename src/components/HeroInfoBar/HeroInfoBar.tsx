import clsx from 'clsx';
import React from 'react';
import { HeroInfoBarProps } from '../types/interfaces.types';

const HeroInfoBar: React.FC<HeroInfoBarProps> = ({ heroImageRowItemsClassName, heroImageBarItems }) => {
  return (
    <div className="relative w-screen md:flex justify-between">
      {heroImageBarItems.map((item) => (
        <div className={clsx('mx-auto w-full text-center py-4 md:py-6 lg:py-6 md:text-xl', heroImageRowItemsClassName)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeroInfoBar;
