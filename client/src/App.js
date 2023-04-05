/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from  "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import Faq from './Pages/Faq';
import Laser from "./Pages/Laser";
import Ultrasound from "./Pages/Ultrasound";



function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/Faq' component={Faq} />
        <Route exact path='/Laser' component={Laser} />
        <Route exact path='/Ultrasound' component={Ultrasound} />
      </Switch>
    </Router> 
  )
}

export default App;
