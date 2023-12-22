import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TripsContextProvider} from "./context/TripsContext";

ReactDOM.render(
  <React.StrictMode>
    <TripsContextProvider>
      <App />
    </TripsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
