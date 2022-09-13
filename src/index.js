import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EditProvider } from './store/editContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EditProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </EditProvider>
  
);


