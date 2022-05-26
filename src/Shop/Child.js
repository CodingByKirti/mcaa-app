import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false,
    };
  }

  addThing = () => {
    this.setState({
      isAdded: true,
    });
    // notify the parent about that added item
    this.props.addItem(this.props.name);
  };
  render() {
    return (
      <div className="card col-3 offset-4">
        <h3>{this.props.name}</h3>
        <h6>{this.props.cost}</h6>
        <h6>Total Items in cart :{this.props.count}</h6>
        {this.state.isAdded && (
          <span className="btn-warning">Added to cart</span>
        )}
        <button onClick={this.addThing}>Add Item</button>
      </div>
    );
  }
}
