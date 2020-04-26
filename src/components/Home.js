import React from 'react';
import compass from '../compass.png'
import '../App.css';

function Home() {
  return (
    <div className="App">
        <img src={compass} className="App-logo" alt="logo" />
        <p>
          piratesofthedelaware.com
        </p>
        <p>coming soon to a river near you</p>
    </div>
  );
}

export default Home;
