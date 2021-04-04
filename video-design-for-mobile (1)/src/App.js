import React, { useState } from "react";
import Video from "./Video";
import "./styles.css";

const App = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <>
      <div className="container">
        <div className="video-cotainer">
          <Video
            video="https://www.youtube.com/watch?v=S1vFItvaZj0"
            title="BB ki vines | Latika |  Youtube"
            date="22 Aug 2017"
          />
          <Video
            video="https://www.youtube.com/watch?v=S1vFItvaZj0"
            title="BB ki vines | Latika |  Youtube"
            date="22 Aug 2017"
          />
          <Video
            video="https://www.youtube.com/watch?v=S1vFItvaZj0"
            title="BB ki vines | Latika |  Youtube"
            date="22 Aug 2017"
          />
          {!active && (
            <Video
              video="https://www.youtube.com/watch?v=S1vFItvaZj0"
              title="BB ki vines | Latika |  Youtube"
              date="22 Aug 2017"
            />
          )}
          <div className="conatiner-square" onClick={handleClick}>
            <p>{active ? "More Videos" : "Less Videos"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
