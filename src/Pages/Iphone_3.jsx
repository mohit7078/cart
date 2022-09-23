import React, { Component } from "react";
import whitephone from "../assets/images/whitephone.jpg";

export class Iphone_3 extends Component {
  state = {
    liked: false,
    count: 0,
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={whitephone} className="phone" /> <br />
            <Social />
          </div>
          <div className="col-md-4 py-4">
            <p>product details</p>
            <h6>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </h6>
          </div>
          <div className="col-md-4">
            <Add_delete count={this.state.count} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={whitephone} className="phone" /> <br />
            <Social />
          </div>
          <div className="col-md-4 py-4">
            <p>product details</p>
            <h6>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </h6>
          </div>
          <div className="col-md-4">
            <Add_delete count={this.state.count} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={whitephone} className="phone" /> <br />
            <Social />
          </div>
          <div className="col-md-4 py-4">
            <p>product details</p>
            <h6>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </h6>
          </div>
          <div className="col-md-4">
            <Add_delete count={this.state.count} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={whitephone} className="phone" /> <br />
            <Social />
          </div>
          <div className="col-md-4 py-4">
            <p>product details</p>
            <h6>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </h6>
          </div>
          <div className="col-md-4">
            <Add_delete count={this.state.count} />
          </div>
        </div>
      </div>
    );
  }
}

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: props.like,
    };
  }

  render() {
    return (
      <>
        <div>
          {this.state.like ? (
            <i
              class="fa-solid fa-2x fa-heart text-center"
              style={{ color: "red" }}
              onClick={() => {
                this.setState({
                  like: false,
                });
              }}
            ></i>
          ) : (
            <i
              class="fa-solid fa-2x fa-heart text-center"
              onClick={() => {
                this.setState({
                  like: true,
                });
              }}
            ></i>
          )}
        </div>
      </>
    );
  }
}

class Add_delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countNew: props.count,
    };
  }
  render() {
    return (
      <div
        className="border border-black py-4 d-flex align-items-center"
        style={{ gap: "10px" }}
      >
       
       <div>
          <i
            class="fa-solid fa-minus"
            onClick={() => {
              this.setState({ countNew: this.state.countNew - 1 });
            }}
          ></i>
        </div>

        <div>{this.state.countNew}</div>
        <div className="rounded-circle">
          <i
            class="fa-solid fa-plus py-2"
            onClick={() => {
              this.setState({ countNew: this.state.countNew + 1 });
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default Iphone_3;
