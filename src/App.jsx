import Home from "./Pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import React, { Component } from "react";
import Dynamic from "./Pages/Dynamic";
import Details from "./Pages/Details";
import Iphone_1 from "./Pages/Iphone_1";
import Iphone_3 from "./Pages/Iphone_3";
import Iphone2 from "./Pages/Iphone2";

export class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/dynamic" element={<Dynamic />} />
          <Route  path="/details/:product_id" element={<Details />} />
          <Route  path="/iphone1" element={<Iphone_1 />} />
          <Route  path="/iphone3" element={<Iphone_3 />} />
          <Route  path="/iphone2" element={<Iphone2 />} />
        </Routes>
      </>
    );
  }
}

export default App;
