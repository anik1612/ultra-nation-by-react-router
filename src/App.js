import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/country">
            <Home/>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
