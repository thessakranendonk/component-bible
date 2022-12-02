import { useLocation } from 'react-router-dom';

import { HeroInfoBar, HeroOne, IconHeader, MapInfoSidePanel } from './components';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import './index.css';
// import { AlertPopup } from './components';
import { useState } from 'react';
import {
  IconNavBarProps,
  MapBusinessHoursProps,
  MapContactProps,
  MapProps,
  NavigationLink,
} from './components/types/interfaces.types';
import clsx from 'clsx';
const logo = require('../src/assets/runnymede.png');

const iconNavBarItems: Array<IconNavBarProps> = [
  {
    icon: <ClockIcon className="text-red-900" />,
    iconLink: '/clock',
    title: 'Monday - Friday',
    undertext: '8am to 5pm',
  },
  {
    icon: <PhoneIcon className="text-red-900" />,
    iconLink: '/call',
    title: '519-861-4813',
    undertext: 'Give us a Call',
  },
  {
    icon: <MapPinIcon className="text-red-900" />,
    iconLink: '/location',
    title: 'Bloor West Village',
    undertext: 'Toronto, Ontario',
  },
];

const navigationLinks: Array<NavigationLink> = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Hours & Location', href: '/hours' },
  { name: 'Our Policy', href: '/policy' },
];

const locationsList: MapProps[] = [
  {
    company: 'Runnymede Medical Clinic',
    location: 'Jernbanetorget 1, Østbanehallen',
    lat: 43.65102,
    lon: -79.47588,
  },
];

const heroImageBarItems: Array<string> = ['Pregnancy', 'Work Related Injuries', 'Vaccinations', 'On-site Pharmacy'];

const hours: Array<MapBusinessHoursProps> = [
  { day: 'Mon', hours: '8:00 AM - 7:00 PM' },
  { day: 'Tue', hours: '8:00 AM - 7:00 PM' },
  { day: 'Wed', hours: '8:00 AM - 5:00 PM' },
  { day: 'Thu', hours: '8:00 AM - 5:00 PM' },
  { day: 'Fri', hours: '8:00 AM - 5:00 PM' },
  { day: 'Sat', hours: '8:00 AM - 5:00 PM' },
];

const contact: MapContactProps = {
  address: '263 Augusta Ave, Toronto',
  email: 'runnymedemedical@runnymede.com',
  phone: '418-585-2154',
};

const App = () => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);
  const [isMapSidePanelVisible, setMapIsSidePanelVisible] = useState(true);

  const closeSidePanel = () => {
    setIsSidePanelVisible(false);
  };

  const openSidePanel = () => {
    setIsSidePanelVisible(true);
  };

  const closeMapSidePanel = () => {
    setMapIsSidePanelVisible(false);
  };

  const openMapSidePanel = () => {
    setMapIsSidePanelVisible(true);
  };
  const location = useLocation();

  return (
    <div
      className={clsx(
        isSidePanelVisible
          ? 'transition transform ease-in duration-500 delay-100 translate-x-80'
          : 'transition transform ease-in-out duration-500 delay-100 translate-x-0',
      )}
    >
      <IconHeader
        companyName="Hello"
        logo={logo}
        navigationLinks={navigationLinks}
        iconNavBarItems={iconNavBarItems}
        headerBgColor="bg-white"
        dropdownBgColor="bg-yellow-900"
        dropdownBorderColor="border-red-900"
        dropdownTextColor="text-red-900"
        textClassName="font-serif"
        linkClassName="text-black text-md font-normal font-serif"
        logoClassName="h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4"
        hoverClassName="hover:text-yellow-400"
        activeLinkClassName="text-red-900 font-serif"
        currentActiveLocation={location.pathname}
        onMenuOpen={openSidePanel}
        onMenuClose={closeSidePanel}
        isPanelOpen={isSidePanelVisible}
      />
      <HeroOne
        image="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
        location="Bloor West Village"
        locationClassName="text-xl lg:text-3xl font-semibold mb-4 font-serif"
        companyName="Runnymede Medical Clinic"
        companyNameClassName="text-4xl lg:text-7xl font-semibold font-serif"
        infoText="Dr. & Associates are currently accepting new patients"
        infoTextClassName="mt-3 lg:my-4 lg:text-xl font-serif"
        contactButtonText="Call: 519-861-4813"
        contactButtonClassName="bg-red-900 text-white px-8 py-3 lg:py-4  mt-10 lg:mt-2 rounded-md font-serif"
        buttonLink="/"
      />

      <HeroInfoBar
        heroImageRowItemsClassName="bg-red-900 text-white font-serif"
        heroImageBarItems={heroImageBarItems}
      />
      <div className="py-24">hello</div>
      {/* <div className="flex flex-row justify-center mx-auto bg-red-900 p-24 w-fit h-fit"> */}
      <div className="static flex mx-auto justify-center bg-red-900 w-mapXLBg h-fit p-8">
        <div className="flex justify-start w-full">
          <MapInfoSidePanel
            mapContactInfo={contact}
            businessHours={hours}
            textClassName="font-serif"
            h2ClassName="font-semibold font-serif text-2xl"
            isMapInfoPanelOpen={isMapSidePanelVisible}
            panelButtonClassName="bg-red-900"
            onMapOpen={openMapSidePanel}
            onMapClose={closeMapSidePanel}
          />
        </div>
        {/* <LocationMap
          mapLocationDetails={locationsList}
          mapCenter={[43.65102, -79.47588]}
          zoomNumber={16}
          mapClassName="absolute inset-x-center m-auto"
          mapSize="w-mapXL h-mapSidePanelXL"
        /> */}
      </div>
    </div>
  );
};

export default App;
