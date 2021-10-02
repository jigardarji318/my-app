import React from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
