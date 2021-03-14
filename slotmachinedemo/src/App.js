import "./styles.css";
import React from "react";
import SM from "./SlotCon";

const App = () => {
  return (
    <>
      <h1 className="heading">
        Welcome to
        <span style={{ fontWeight: "bold" }}>The Slot Machine Game</span>
      </h1>
      <div>
        <SM />
      </div>
    </>
  );
};

export default App;
