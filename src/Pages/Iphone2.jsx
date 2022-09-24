import React, { Component } from "react";
import { useParams } from "react-router-dom";
import whitephone from "../assets/images/whitephone.jpg";
import { Link } from "react-router-dom";

export class Iphone2 extends Component {
  state = {
    liked: false,
    count: 0,
  };
  render() {
    return (
      <div className="container">
        {/* First product */}
        <div className="row single_product_row">
          <div className="col-md-3 phone_col">
            <Link to={"/Productdetails/" + 1}>
              {" "}
              <img src={whitephone} className="phone" />{" "}
            </Link>{" "}
            <br />
          </div>
          <div className="col-md-7">
            <Link to={"/Productdetails/"+1}>
              {" "}
              <h3>Iphone 13</h3>{" "}
            </Link>
            <p>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-end">
              <Social />
            </div>
            <div className="d-flex justify-content-end">
              <Add_delete count={this.state.count} />
            </div>
          </div>
        </div>
        {/* second product */}
        <div className="row single_product_row">
          <div className="col-md-3 phone_col">
            <Link to={"/Productdetails/"+2}>
              {" "}
              <img src={whitephone} className="phone" />{" "}
            </Link>{" "}
            <br />
          </div>
          <div className="col-md-7">
            <Link to={"/Productdetails/"+2}>
              {" "}
              <h3>Iphone 13</h3>{" "}
            </Link>
            <p>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-end">
              <Social />
            </div>
            <div className="d-flex justify-content-end">
              <Add_delete count={this.state.count} />
            </div>
          </div>
        </div>
        {/* third product */}
        <div className="row single_product_row">
          <div className="col-md-3 phone_col">
            <Link to={"/Productdetails/"+3}>
              {" "}
              <img src={whitephone} className="phone" />{" "}
            </Link>{" "}
            <br />
          </div>
          <div className="col-md-7">
            <Link to={"/Productdetails/"+3}>
              {" "}
              <h3>Iphone 13</h3>{" "}
            </Link>
            <p>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-end">
              <Social />
            </div>
            <div className="d-flex justify-content-end">
              <Add_delete count={this.state.count} />
            </div>
          </div>
        </div>
        {/* 4th product */}
        <div className="row single_product_row">
          <div className="col-md-3 phone_col">
            <Link to={"/Productdetails/"+4}>
              {" "}
              <img src={whitephone} className="phone" />{" "}
            </Link>{" "}
            <br />
          </div>
          <div className="col-md-7">
            <Link to={"/Productdetails/"+4}>
              {" "}
              <h3>Iphone 13</h3>{" "}
            </Link>
            <p>
              mohit Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusantium.
            </p>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-end">
              <Social />
            </div>
            <div className="d-flex justify-content-end">
              <Add_delete count={this.state.count} />
            </div>
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
      <>
        {this.state.countNew === 0 ? (
          <div
            className="border border-black py-4 d-flex justify-content-around align-items-center"
            style={{
              gap: "10px",
              borderRadius: "5px",
              height: "40px",
              width: "120px",
              cursor: "pointer",
            }}
            onClick={() => {
              this.setState({ countNew: this.state.countNew + 1 });
            }}
          >
            <div>Add Item</div>
          </div>
        ) : (
          <div
            className="border border-black py-4 d-flex justify-content-around align-items-center"
            style={{
              gap: "10px",
              borderRadius: "5px",
              height: "40px",
              width: "120px",
              cursor: "pointer",
            }}
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
        )}
      </>
    );
  }
}
export default Iphone2;
