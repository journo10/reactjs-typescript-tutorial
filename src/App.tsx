import React from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

const data = [
  { id: 1, name: "cristiano ronaldo", age: 36 },
  { id: 2, name: "selçuk inan", age: 34 },
  { id: 3, name: "didier drogba", age: 38 },
];

function App() {
  return (
    <>
      <div>
        {data.map((item) => (
          <Card key={item.id} name={item.name} age={item.age} />
        ))}
      </div>
      <Button />
    </>
  );
}

export default App;
