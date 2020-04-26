import React from 'react';
import logo from './logo.svg';
import compass from './compass.png'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={compass} className="App-logo" alt="logo" />
        <p>
          PIRATES OF THE DELAWARE
        </p>
        <p>coming soon</p>
      </header>
      <Route exact path={'/'} component={Home} />
    </div>
  );
}

export default App;
