import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardContext from '../../reactapp/src/Context/CardContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardContext>
        <App />
    </CardContext>
  </React.StrictMode>
);
