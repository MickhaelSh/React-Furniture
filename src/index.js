import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import func from './components/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={func().store}>
      <PersistGate loading={null} persistor={func().persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
