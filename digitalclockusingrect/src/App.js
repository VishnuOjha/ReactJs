import React, { useState } from "react";
import "./styles.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, updateTime] = useState(time);

  const curTime = () => {
    time = new Date().toLocaleTimeString();
    updateTime(time);
  };

  setInterval(curTime, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default App;
