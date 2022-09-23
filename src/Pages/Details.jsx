import React, { Component } from "react";
import {useParams} from "react-router-dom"

export class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.product_id
        }
    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-3 text-center">
            <button>{this.state.id}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => <Details {...useParams()} {...props}/>
