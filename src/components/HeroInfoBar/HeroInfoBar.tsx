import clsx from 'clsx';
import React from 'react';

export interface HeroInfoBarProps {
  heroImageRowItemsClassName?: string;
}
const HeroInfoBar: React.FC<HeroInfoBarProps> = ({ heroImageRowItemsClassName }) => {
  return (
    <div className="relative w-screen">
      <div
        className={clsx(
          'grid md:grid-cols-2 lg:grid-cols-4 text-center lg:py-6 md:text-xl',
          heroImageRowItemsClassName,
        )}
      >
        <div className="lg:border-r-2 lg:border-white/25 py-4 md:py-6 lg:py-0">Pregnancy</div>
        <div className="lg:border-r-2 lg:border-white/25 py-4 md:py-6 lg:py-0">Work Related Injuries</div>
        <div className="lg:border-r-2 lg:border-white/25 py-4 md:py-6 lg:py-0">Vaccinations</div>
        <div className="py-4 md:py-6 lg:py-0">Pharmacy</div>
      </div>
    </div>
  );
};

export default HeroInfoBar;
