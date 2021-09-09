/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route } from  "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import Updates from './Pages/Updates';


function App () {
  return(
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/Updates' component={Updates} />
      </div>
    </Router>
  )
}

export default App;
