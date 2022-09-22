

import Home from "./Pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import React, { Component } from "react";


export class App extends Component {
  render() {
    return (
      <>
    
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>

     
      </>
    );
  }
}

export default App;
