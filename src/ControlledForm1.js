import React, { Component } from "react";

export default class ControlledForm1 extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div>
        {/* <input type="text" /> */}
        {/* <input type="text" value="Kirti" /> */}
        {/*<input type="text" defaultValue="Kirti" />  */}
        Enter Name:
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          // defaultValue="abc"
        />
      </div>
    );
  }
}
