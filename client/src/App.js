/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from  "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import Updates from './Pages/Updates';


function App () {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route exact path='/Updates' component={Updates} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
