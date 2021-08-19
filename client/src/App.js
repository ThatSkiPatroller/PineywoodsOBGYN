/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router } from  "react-router-dom";
import Home from './Pages/Home';

import "./App.css";

function App () {
  return(
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  )
}

export default App;
