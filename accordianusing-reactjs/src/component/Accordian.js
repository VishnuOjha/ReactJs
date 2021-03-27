import React, { useRef, useState } from "react";
import "./Accordian.css";
import Chevron from "./Chevron";

const Accordian = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState();

  const content = useRef(null);

  const toggleAction = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "accrodian-heading" : "accordian-heading active"
    );
    console.log(content.current.scrollHeight);
  };

  return (
    <div className="accordian-section">
      <div className={`accordian-heading ${active}`}>
        <button className={`accordian ${active}`} onClick={toggleAction}>
          <h2>{props.title}</h2>
          <span className="accordian-icon">
            <Chevron width={10} color={"#000"} />
          </span>
        </button>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordian-content"
      >
        <div
          className="accordian-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

const data = [
  {
    userId: "rirani",
    jobTitleName: "Developer",
    firstName: "Romin",
    lastName: "Irani",
    preferredFullName: "Romin Irani",
    employeeCode: "E1",
    region: "CA",
    phoneNumber: "408-1234567",
    emailAddress: "romin.k.irani@gmail.com"
  },
  {
    userId: "nirani",
    jobTitleName: "Developer",
    firstName: "Neil",
    lastName: "Irani",
    preferredFullName: "Neil Irani",
    employeeCode: "E2",
    region: "CA",
    phoneNumber: "408-1111111",
    emailAddress: "neilrirani@gmail.com"
  },
  {
    userId: "thanks",
    jobTitleName: "Program Directory",
    firstName: "Tom",
    lastName: "Hanks",
    preferredFullName: "Tom Hanks",
    employeeCode: "E3",
    region: "CA",
    phoneNumber: "408-2222222",
    emailAddress: "tomhanks@gmail.com"
  }
];

export default Accordian;
