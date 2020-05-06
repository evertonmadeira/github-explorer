import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import CreateGlobalStyle from './styles';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CreateGlobalStyle />
    </>
  );
};

export default App;
