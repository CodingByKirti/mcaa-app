import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome to our Portal !!!",
    };
  }

  changeMsg() {
    this.setState({
      msg: "Thanks for the like",
    });
  }
  render() {
    return (
      <div>
        <h1>Hello Guest !!! {this.state.msg}</h1>
        <button onClick={() => this.changeMsg()}>Plz Hit Like 👍 </button>
      </div>
    );
  }
}
