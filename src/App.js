import React from 'react';
import logo from './logo.svg';
import compass from './compass.png'
import Home from './components/Home'
import POTDNav from  './components/POTDNav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <POTDNav /> */}
      <Router basename={process.env.PUBLIC_URL}>
            <Switch>
            <Route exact path='/'>
                <Home/>
              </Route>
              <Route exact path='/'>
                <Home/>
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
