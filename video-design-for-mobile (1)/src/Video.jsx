import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";

const Video = (props) => {
  return (
    <div className="wrapper">
      <div className="video-box">
        <div className="video">
          <ReactPlayer
            url={props.video}
            width="150px"
            height="80px"
            onReady={() => console.log("onready callback")}
            onStart={() => console.log("onstart callback")}
            onPause={() => console.log("onpause callback")}
            onEnded={() => console.log("onended callback")}
            onError={() => console.log("onerror callback")}
          />
        </div>
      </div>
      <div className="video-info">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Video;
