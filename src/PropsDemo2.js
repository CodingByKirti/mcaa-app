import React, { Component } from "react";

export default class PropsDemo2 extends Component {
  render() {
    return (
      <div>
        PropsDemo2
        <h1>{this.props.a}</h1>
        <h1>{this.props.b}</h1>
      </div>
    );
  }
}
