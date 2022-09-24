import Home from "./Pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import React, { Component } from "react";
import Dynamic from "./Pages/Dynamic";
import Details from "./Pages/Details";

import Iphone2 from "./Pages/Iphone2";
import Productdetails from "./Pages/Productdetails";



export class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/iphone2" element={<Iphone2 />} />

          <Route
            path="/productdetails/:product_id"
            element={<Productdetails />}
          />

          
        </Routes>
      </>
    );
  }
}

export default App;
