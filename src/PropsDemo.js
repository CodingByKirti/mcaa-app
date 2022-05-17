import React from "react";

export default function PropsDemo(props) {
  return (
    <div>
      <h1>PropsDemo</h1>
      <h2>property 1 : {props.uname}</h2>
      <h2>property 2 : {props.email}</h2>
    </div>
  );
}
