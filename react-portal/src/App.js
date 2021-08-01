import React, { useState } from "react";
import Modal from "./Modal";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const BUTTON_WRAPPER_STYLES = {
    postion: "relative",
    zIndex: 1
  };

  const BUTTON_STYLES = {
    fontSize: "24px"
  };
  const OTHER_CONTENT_STYLES = {
    postion: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px",
    fontSize: "24px"
  };

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button style={BUTTON_STYLES} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          New Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
};

export default App;
