import React from 'react';
import logo from './logo.svg';
import compass from './compass.png'
import Home from './components/Home'
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
      <header className="App-header">
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
