import * as React from "react";
import { useFrictionGroup } from "renature";

import Triangle from "./Triangle";

import "./styles.css";

const App = () => {
  const [nodes] = useFrictionGroup(4, (i: number) => ({
    from: {
      transform: "translateX(0px)",
      fill: "#FFCE24"
    },
    to: {
      transform: "translateX(20px)",
      fill: "#FA24FF"
    },
    config: {
      mu: 0.5,
      mass: 200,
      initialVelocity: 5
    },
    delay: i * 500,
    infinite: true
  }));

  return (
    <div className="App">
      {nodes.map((node, i) => {
        return <Triangle ref={node.ref} key={i} />;
      })}
    </div>
  );
};

export default App;
