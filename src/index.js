import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './components/contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
        <App />
    </Provider>
  </React.StrictMode>
);

