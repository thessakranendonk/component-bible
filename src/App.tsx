// import { Route, Switch } from 'react-router-dom';

import { Popup } from './components';
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
      {/* <Popup key="index" title="test" position="bottom-right" variant="danger" /> */}
      <SimpleButton text="test" />

      <main className="main-content">{/* <PageFooter /> */}</main>
    </>
  );
};

export default App;
