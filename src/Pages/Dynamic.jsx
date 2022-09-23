import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Dynamic extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 1}>
              <button>1</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 2}>
              <button>2</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 3}>
              <button>3</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 4}>
              <button>4</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 5}>
              <button>5</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 6}>
              <button>6</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 7}>
              <button>7</button>
            </Link>
          </div> <div className="col-md-3 my-3 text-center">
            <Link to={"/details/" + 8}>
              <button>8</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dynamic;
