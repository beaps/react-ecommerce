import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
