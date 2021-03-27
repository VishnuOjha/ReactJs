import React, { useState } from "react";
import "./styles.css";

const Accordian = ({ title, body }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="accordian">
      <div
        className="accordian-header"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <h2>{title}</h2>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div className="accordian-content">
        {isOpen && (
          <p>
            {body}
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
