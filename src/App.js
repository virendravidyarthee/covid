import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import history from './services/history';
import { Routes } from './routes';
import ReactGA from 'react-ga';
import { googleAnalytics } from './utils/constants';

function App() {
  ReactGA.initialize(googleAnalytics);
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
