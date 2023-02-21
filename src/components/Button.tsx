import React, { useState } from "react";

const Button = () => {
  const [myName, setMyName] = useState("Akif");

  const addUpdateName = () => {
    setMyName("Ronaldo");
  };

  return (
    <>
      <span>İsim: {myName}</span><br />
      <button onClick={addUpdateName}>Değiştir</button>
    </>
  );
};

export default Button;
