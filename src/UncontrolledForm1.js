import React, { Component, createRef } from "react";

export default class UncontrolledForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.myref = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.myref);
    console.log(this.myref.current);
    console.log(this.myref.current.value);
    this.setState({
      value: this.myref.current.value,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.myref} />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}
