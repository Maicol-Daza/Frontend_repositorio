import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Authprovider } from "./context/authcontext";
import { BrowserRouter } from 'react-router-dom';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Authprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Authprovider>
</React.StrictMode>
);
