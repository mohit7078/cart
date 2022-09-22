import React, { Component } from "react";

export class Cart extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <Add_delete set={this.state.count} />
          <Add_delete set={this.state.count} />
          <Add_delete set={this.state.count} />
          <Add_delete set={this.state.count} />
          <Add_delete set={this.state.count} />
          <Add_delete set={this.state.count} />
        </div>
      </div>
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
        <div className="col-md-4">
          <button
            onClick={() => {
              this.setState({ countNew: this.state.countNew + 1 });
            }}
          >
            Add
          </button>
        </div>
        <div className="col-md-4">{this.state.countNew}</div>
        <div
          className="col-md-4"
          onClick={() => {
            this.setState({ countNew: this.state.countNew - 1 });
          }}
        >
          <button>Sub</button>
        </div>
      </>
    );
  }
}

export default Cart;
