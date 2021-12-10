/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from  "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import Updates from './Pages/Updates';
import Laser from "./Pages/Laser";
import Ultrasound from "./Pages/Ultrasound";
import FadeInLogo from "./Components/FadeInLogo";
import { Divider } from "@material-ui/core";



function App () {
  return (
    <HashRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/AboutUs' component={AboutUs} />
      <Route exact path='/Gallery' component={Gallery} />
      <Route exact path='/Updates' component={Updates} />
      <Route exact path='/Laser' component={Laser} />
      <Route exact path='/Ultrasound' component={Ultrasound} />
    </HashRouter> 
  )
}

export default App;
