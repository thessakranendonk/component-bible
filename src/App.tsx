// import AlertPopup from './components/AlertPopup';
// import SimpleButton from './components/SimpleButton';
import { useLocation } from 'react-router-dom';
import SimpleHeader from './components/SimpleHeader';
import { NavigationLink } from './components/SimpleHeader/SimpleHeader';
import './index.css';
const logo = require('../src/assets/gf-logo.png');

const navigationLinks: Array<NavigationLink> = [
  { name: 'Listen', href: '/listen' },
  { name: 'Shows', href: '/shows' },
  { name: 'Store', href: '/store' },
  { name: 'About', href: '/about' },
];

const App = () => {
  const location = useLocation();

  return (
    <>
      <SimpleHeader
        headerTitle="Hello"
        logo={logo}
        navigationLinks={navigationLinks}
        bgColor="bg-black border-b-8 border-green-400"
        link="text-amber-600 text-lg"
        hover="hover:text-yellow-400"
        active="text-green-600 text-lg"
        activeLink={location.pathname}
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
