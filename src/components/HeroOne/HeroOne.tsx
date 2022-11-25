import clsx from 'clsx';
import React from 'react';
import { HeroOneProps } from '../types/interfaces.types';

const HeroOne: React.FC<HeroOneProps> = ({
  image,
  alt,
  heroImageClassName,
  location,
  locationClassName,
  companyName,
  companyNameClassName,
  infoText,
  infoTextClassName,
  contactButtonText,
  contactButtonClassName,
  buttonLink,
}) => {
  return (
    <div>
      <div className="relative">
        <div className=" inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="w-screen">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className={clsx('h-full w-full object-cover opacity-50', heroImageClassName)}
                src={image}
                alt={alt}
              />
              <div className="absolute inset-0" />
            </div>
            <div className="relative px-8 py-16 lg:py-28 lg:pt-20 lg:px-32">
              <h1>
                <span className={clsx('block', locationClassName)}>{location}</span>
                <span className={clsx('block', companyNameClassName)}>{companyName}</span>
              </h1>
              <p className={clsx('block', infoTextClassName)}>{infoText}</p>
              <a href={buttonLink}>
                <button type="button" className={clsx('w-fit', contactButtonClassName)}>
                  {contactButtonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
