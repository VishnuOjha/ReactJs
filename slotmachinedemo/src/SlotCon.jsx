import React from "react";

const SM = () => {
  let x = 1;
  let y = 1;
  let z = 1;

  if (x === y) {
    if (y === z) {
      return (
        <>
          <div className="innerslot">
            <h1>
              {x} {y} {z}
            </h1>
            <h1>This is Matching</h1>
            <hr />
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Not Matching</h1>
        </div>
        <hr />
      </>
    );
  }
};

export default SM;
