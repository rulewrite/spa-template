import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Bpage from './components/Bpage';
import './index.css';
import Mui from './Mui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Mui>
      header
      <BrowserRouter>
        <Routes>
          <Route path="/b" element={<Bpage />}></Route>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Mui>
  </React.StrictMode>
);
