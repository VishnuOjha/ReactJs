import { useState } from "react";
import "./styles.css";

export default function App() {
  let newTime = new Date().toLocaleTimeString();
  const [time, fectTime] = useState(newTime);

  const getTime = () => {
    newTime = new Date().toLocaleTimeString();
    fectTime(newTime);
    console.log(newTime);
  };
  return (
    <>
      <h1>{time}</h1>
      <button onClick={getTime}> GET TIME</button>
    </>
  );
}
