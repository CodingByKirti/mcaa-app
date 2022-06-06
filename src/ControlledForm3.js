import React, { Component } from "react";

export default class ControlledForm3 extends Component {
  state = {
    uname: "",
    lname: "",
    feedback: "",
  };

  trackChange = (e) => {
    console.log(e.target);
    console.log(e.target[0]);

    this.setState({
      [e.target.name]: e.target.value,
      //   lname: e.target.lname,
      //   feedback: e.target.feedback,
    });
  };

  changeNature = (e) => {
    e.preventDefault();
    alert(`data received ${this.state.lname} and ${this.state.uname}`);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.changeNature}>
          Enter user name :{" "}
          <input
            type="text"
            name="uname"
            value={this.state.uname}
            onChange={this.trackChange}
          />
          <br />
          Enter last name :{" "}
          <input
            type="text"
            name="lname"
            value={this.state.lname.toUpperCase()}
            onChange={this.trackChange}
          />
          <br />
          Enter feedback :{" "}
          <textarea
            name="feedback"
            id=""
            cols="30"
            rows="10"
            value={this.state.feedback.slice(0, 20)}
            onChange={this.trackChange}
          ></textarea>
          <br />
          <button type="submit">Click Here</button>
        </form>
      </div>
    );
  }
}
