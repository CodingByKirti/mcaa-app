import React, { useRef, useState } from "react";

export const RefHook = () => {
  const myref = useRef("");

  const [flag, setflag] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    myref.current.value === ""
      ? alert("plz enter your name ")
      : alert("Thank you for registering with us");

    myref.current.value !== "" ? setflag(true) : setflag(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{flag && `Welcome ${myref.current.value} !!!`}</h1>
        enter name <input type="text" ref={myref} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
