import React from 'react';
import Routes from "./routes/routes"
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './global/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
