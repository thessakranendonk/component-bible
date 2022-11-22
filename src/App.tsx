// import AlertPopup from './components/AlertPopup';
// import SimpleButton from './components/SimpleButton';
import { useLocation } from 'react-router-dom';
import IconHeader from './components/IconHeader';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { NavigationLink } from './components/SimpleHeader/SimpleHeader';
import './index.css';
const logo = require('../src/assets/runnymede.png');

export interface IconNavBarProps {
  icon: any;
  iconLink: string;
  title: string;
  undertext: string;
}

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

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <IconHeader
        headerTitle="Hello"
        logo={logo}
        navigationLinks={navigationLinks}
        iconNavBarItems={iconNavBarItems}
        headerBgColor="bg-white"
        buttonBgColor="bg-red-900"
        buttonBorderColor="border-red-900"
        buttonTextColor="text-red-900"
        linkClassName="text-black text-md font-normal"
        logoClassName="h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4"
        hoverClassName="hover:text-yellow-400"
        activeLinkClassName="text-red-900"
        currentActiveLocation={location.pathname}
      />
      <main className="main-content">
        {/* <AlertPopup
          alertVisible={true}
          key="index"
          title="test"
          position="top-12 left-12"
          variant="danger"
          variant_color="bg-purple-600"
          icon_color="fill-red-900"
          text_color="text-red-900"
          onClick={() => alert('close')}
        /> */}
      </main>
    </>
  );
};

export default App;
