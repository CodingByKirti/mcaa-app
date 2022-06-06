import React, { useState } from "react";

export const StateHook = () => {
  const [name, setname] = useState("Kirti");

  const changeName = () => {
    setname("K. Sharma");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Click me</button>
    </div>
  );
};
