import React, { Component } from "react";

export default class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
    // this.incLikes = this.incLikes.bind(this);  //.2nd way.. //
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
        {/* <button onClick={this.incLikes}>Like 👍 </button> // ...2 way */}
        {/* <button onClick={() => this.incLikes()}>Like 👍 </button>  // 1...way*/}
        <button onClick={this.incLikes.bind(this)}>Like 👍 </button>
        {/* // 1...way */}
      </div>
    );
  }
}
