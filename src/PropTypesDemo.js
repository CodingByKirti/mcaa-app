import React, { Component } from "react";
import PropTypes from "prop-types";
export class PropTypesDemo extends Component {
  render() {
    return (
      <div>
        Array : {this.props.arr} <hr />
        Number : {this.props.num} <hr />
        Boolean :{this.props.flag ? "true" : "False"} <hr />
        String :{this.props.str} <hr />
        data : {this.props.data} <hr />
        age : {this.props.age} <hr />
        msg : {this.props.msg} <hr />
      </div>
    );
  }
} // end class

PropTypesDemo.propTypes = {
  arr: PropTypes.array.isRequired,
  num: PropTypes.number,
  flag: PropTypes.bool,
  str: PropTypes.string.isRequired,
  data: PropTypes.oneOf(["Test1", "Test2"]),
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  msg: myValidator,
};

function myValidator(props, propName, ComponentName) {
  let p = props[propName];
  let msg;
  if (typeof p == "string") {
    msg =
      p.length <= 10
        ? null
        : new Error(
            propName + " in " + ComponentName + "has a  limit of 10 chars only"
          );
  }
  return msg;
}
PropTypesDemo.defaultProps = {
  arr: [1, 2, 3],
  num: 12,
  flag: true,
  str: "Hiii",
  data: "Test2",
  age: 3,
  msg: "hello , i am  a new Message",
};

export default PropTypesDemo;
