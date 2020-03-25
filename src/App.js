import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import history from './services/history';
import { Routes } from './routes';

function App() {
  return (
    <HashRouter history={history}>
      <Routes />
    </HashRouter>
  );
}

export default App;
