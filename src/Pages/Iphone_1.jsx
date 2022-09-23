import React, { Component } from "react";
import { useParams } from "react-router-dom";
import phone from "../assets/images/phone.png";
import whitephone from "../assets/images/whitephone.jpg";
import bluephone from "../assets/images/bluephone.jpg";
import lava from "../assets/images/lava.webp";
import flower from "../assets/images/flower.png";

export class Iphone_1 extends Component {
  state = {
    liked: false,
    count: 0,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4 d-flex">
              <img src={whitephone} className="phones" /> <br />
              </div>
              <div className="col-md-8">
              <button>Additems</button>
            <button>add</button>
            <button>sub</button>
              </div>
            </div>

            <img src={whitephone} className="phones" /> <br />
            <button>Additems</button>
            <button>add</button>
            <button>sub</button>
          </div>
          <div className="col-md-4">
            <img src={whitephone} className="phones" /> <br />
            <button>Additems</button>
            <button>add</button>
            <button>sub</button>
          </div>
          <div className="col-md-4">
            <img src={bluephone} className="phones" /> <br />
            <button>Additems</button>
            <button>add</button>
            <button>sub</button>
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
        <div className="col-md-3">
          <img src={flower} width="150" />
          <br />
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
      countNew: props.set,
    };
  }
  render() {
    return (
      <>
        {this.state.countNew === 0 ? (
          <button
            onClick={() => {
              this.setState({ countNew: this.state.countNew + 1 });
            }}
          >
            Add Item
          </button>
        ) : (
          <>
            <div className="col-md-1">
              <button
                onClick={() => {
                  this.setState({ countNew: this.state.countNew + 1 });
                }}
              >
                Add
              </button>
            </div>
            <div className="col-md-1">{this.state.countNew}</div>
            <div
              className="col-md-1"
              onClick={() => {
                this.setState({ countNew: this.state.countNew - 1 });
              }}
            >
              <button>Sub</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Iphone_1;
