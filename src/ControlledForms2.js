import React, { Component } from "react";

export default class ControlledForms2 extends Component {
  state = {
    uname: "",
    lname: "",
    feedback: "",
  };

  trackChange = (e) => {
    console.log(e);
    this.setState({
      uname: e.target.uname,
      lname: e.target.lname,
      feedback: e.target.feedback,
    });
  };
  render() {
    return (
      <div>
        <form action="">
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
            value={this.state.lname}
            onChange={this.trackChange}
          />
          <br />
          Enter feedback :{" "}
          <textarea
            name="feedback"
            id=""
            cols="30"
            rows="10"
            value={this.state.feedback}
            onChange={this.trackChange}
          ></textarea>
          <br />
        </form>
      </div>
    );
  }
}
