import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/common.css";
import "./assets/css/font.css";
import "./assets/css/iconfont.css";

import AppRouter from './router';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>  
  </React.StrictMode>
);


