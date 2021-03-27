import React from "react";
import Img from "./images/contactus.svg";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="contact-left">
          <div className="contact-box">
            <h2>Contact Us</h2>
            <div>
              <label>Name</label>
              <input type="text" placeholder="your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="your email" />
            </div>
            <div>
              <label>Subject</label>
              <input type="text" placeholder="type subject" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="type message"></textarea>
            </div>
            <button type="submit">Send</button>
          </div>
        </div>
        <div className="contact-right">
          <img src={Img} />
        </div>
      </div>
    </>
  );
};

export default Form;
