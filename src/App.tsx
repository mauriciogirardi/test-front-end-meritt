import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import Router from 'router';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
