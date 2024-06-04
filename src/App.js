/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoodCategory from './components/FoodCategory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/category" component={FoodCategory} />
        {/* Add more routes as needed */}
      </Switch>
    </div>
  );
}

export default App;
