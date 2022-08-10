import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Mui from './Mui';
import Routes from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Mui>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Mui>
  </React.StrictMode>
);
