// import { Route, Switch } from 'react-router-dom';

import AlertPopup from './components/AlertPopup';
import SimpleButton from './components/SimpleButton';
import './index.css';
// import PageFooter from './components/PageFooter/PageFooter';
// import PageHeader from './components/PageHeader/PageHeader';
// import HeaderImageBar from './components/HeaderImageBar/HeaderImageBar';
// import LogOut from './components/LogOut/LogOut';

const App = () => {
  return (
    <>
      {/* <PageHeader />
      <HeaderImageBar />
      <LogOut /> */}

      <SimpleButton text="test" />

      <main className="main-content">
        {/* <PageFooter /> */}
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
