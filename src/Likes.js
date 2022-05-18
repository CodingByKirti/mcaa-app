import React, { Component } from "react";

export default class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }
  incLikes() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Total Likes : {this.state.likes}</h1>
        <button onClick={() => this.incLikes()}>Like 👍 </button>
      </div>
    );
  }
}
