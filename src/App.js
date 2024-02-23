import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Grade from './Grade';
import Calculator from './Calculator';
import CRUD from './CRUD';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/grade" component={Grade} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/crud" component={CRUD} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
