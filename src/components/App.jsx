import React from "react";

function App() {
  var isDone = true;

  const strikeThrough = { textDecoration: "line-through" };
  // return <p>Buy Milk </p>;
  // return <p style={{textDecoration: "line-through"}}>Buy Milk </p>;
  // return <p style={isDone ? strikeThrough : null}>Buy Milk </p>;
  return <p style={isDone ? strikeThrough : null}>Buy Milk </p>;
}

export default App;
