import React, { FC } from "react";

type CardProps = {
  name: string;
  age: number;
};

const Card: FC<CardProps> = ({ name, age }) => {
  return (
    <>
      <h3>Name: {name.toLocaleUpperCase()}</h3>
      <p>Age: {age}</p>
    </>
  );
};

export default Card;
