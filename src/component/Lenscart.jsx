import React, { Component } from "react";

export class Lenscart extends Component {
    state = {
    
        count: 0,
      };
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Test />
          </div>
          <div className="col-md-4">
            <Bottle />
            <Add_delete/>
          </div>
          <div className="col-md-4">
            <Iphone />
          </div>
        </div>
      </div>
    );
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      name: "test",
      like: props.like,
    };
  }

  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet.{this.state.id}</p>
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
        <p>Lorem ipsum dolor sit amet.{this.state.name}</p>
      </div>
    );
  }
}

class Bottle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 2,
      name: "test2",
    };
  }
  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet.{this.state.id}</p>
        <p>Lorem ipsum dolor sit amet.{this.state.name}</p>
      </div>
    );
  }
}

class Iphone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 8,
      name: "hello",
    };
  }
  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet.{this.state.id}</p>
        <p>Lorem ipsum dolor sit amet.{this.state.name}</p>
      </div>
    );
  }
}




class Add_delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        countNew: props.set,
  
    
            
        count: 0,
        
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

export default Lenscart;
