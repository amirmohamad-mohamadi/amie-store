import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage.component';

import './App.css';

function App() {
  return (
    <switch>
      <Route exact path='/' component={HomePage} />
    </switch>
  );
}

export default App;
