import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portofolioblue">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);