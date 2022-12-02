import { Transition } from '@headlessui/react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@patternfly/react-icons';
import clsx from 'clsx';
import React from 'react';
import { MapContactInfo, MapUiProps } from '../types/interfaces.types';

const MapInfoSidePanel: React.FC<MapContactInfo & MapUiProps> = ({
  mapContactInfo,
  businessHours,
  textClassName,
  h2ClassName,
  hoverClassName,
  isMapInfoPanelOpen,
  panelButtonClassName,
  onMapOpen,
  onMapClose,
}) => {
  return (
    <>
      <Transition show={isMapInfoPanelOpen}>
        <div className="relative bg-white p-10 z-50 h-mapSidePanelXL w-fit">
          <div className=" bg-white">
            <div className="flex flex-col overflow-y-scroll">
              <h2 className={clsx('pb-8', h2ClassName)}>HOURS</h2>
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className={clsx('flex justify-between border-b-2 last:border-0 py-2', textClassName)}
                >
                  <p className="font-semibold text-md">{item.day}</p>
                  <p className="text-md font-extralight pl-12">{item.hours}</p>
                </div>
              ))}
            </div>
            <div className="pt-12">
              <h2 className={clsx(' pb-8', h2ClassName)}>CONTACT US</h2>
              <div className={clsx('flex flex-col', textClassName)}>
                <p className="text-md pb-3">
                  <MapPinIcon className="inline-flex w-4 h-4 mr-3" />
                  {mapContactInfo.address}
                </p>
                <a className={clsx('text-md pb-3', hoverClassName)} href={`mailto: ${mapContactInfo.email}`}>
                  <EnvelopeIcon className="inline-flex w-4 h-4 mr-3" />
                  {mapContactInfo.email}
                </a>
                <a href={`tel:${mapContactInfo.phone}`}>
                  <PhoneIcon className="inline-flex w-4 h-4 mr-3" />
                  {mapContactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      {isMapInfoPanelOpen ? (
        <div className="relative h-mapSidePanelXL bg-white z-50 flex flex-col justify-center">
          <button className={clsx('w-fit h-fit text-white p-2', panelButtonClassName)} onClick={onMapClose}>
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="relative h-mapSidePanelXL bg-white z-50 flex flex-col justify-center">
          <button className={clsx('w-fit h-fit text-white p-2', panelButtonClassName)} onClick={onMapOpen}>
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default MapInfoSidePanel;
