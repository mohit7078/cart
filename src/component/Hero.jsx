import React, { Component } from "react";
import handy from "../assets/images/handyphone.png";

export class Hero extends Component {
  render() {
    return (
        <div className="single_product_row2">
      <div className="row ">
     
        <div className="col-md-2">
        <h1></h1>
        </div>
        <div className="col-md-4" style={{padding:"0px 0"}}>
        <div className="row">
            <div className="col-md-4">
              <h5 style={{fontWeight:"bold"}}>General</h5>
            </div>
            <div className="col-md-8"></div>
            <div className="row">
              <div className="col-md-4">In The Box</div>
              <div className="col-md-8">
                iPhone, USB-C to Lightning Cable, Documentation
              </div>
              <div className="col-md-4">Model Number</div>
              <div className="col-md-8">MNGK3HN/A</div>
              <div className="col-md-4">Model Name</div>
              <div className="col-md-8">iPhone 13</div>
              <div className="col-md-4">Color</div>
              <div className="col-md-8">Green</div>
              <div className="col-md-4">Broser type</div>
              <div className="col-md-8">Smart phone</div>
              <div className="col-md-4">Sim type</div>
              <div className="col-md-8">Dual sim</div>
              <div className="col-md-4">Touch screeen</div>
              <div className="col-md-8">Yes</div>
              <div className="col-md-4">In The Box</div>
              <div className="col-md-8">
                iPhone, USB-C to Lightning Cable, Documentation
              </div>
              <div className="col-md-4">In The Box</div>
              <div className="col-md-8">
                iPhone, USB-C to Lightning Cable, Documentation
              </div>
              <div className="col-md-4">In The Box</div>
              <div className="col-md-8">
                iPhone, USB-C to Lightning Cable, Documentation
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={handy} className="handyphone" alt="" srcset="" />
        </div>
      </div>
      </div>
    );
  }
}

export default Hero;
