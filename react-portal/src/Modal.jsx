import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "100px",
  backgroundColor: "#fff",
  zIndex: 1000,
  fontSize: "24px"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000
};

const BUTTON_STYLES = {
  fontSize: "24px"
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <span>{children} </span>
        <button onClick={onClose} style={BUTTON_STYLES}>
          Close
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
