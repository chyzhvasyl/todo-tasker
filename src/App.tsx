import React from 'react';
import logo from './logo.svg';
import { CoreComponent } from "./modules";

import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <CoreComponent></CoreComponent>
    </div>
  );
}

export default App;
