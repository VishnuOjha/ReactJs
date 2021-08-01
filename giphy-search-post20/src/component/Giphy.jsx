import axios from "axios";
import React, { useState } from "react";
import "./giphy.css";

const Giphy = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getGiphy = async () => {
  //     const response = await axios("https://api.giphy.com/v1/gifs/search", {
  //       params: {
  //         api_key: "ZGKTFPRjdkdrNEo9qb6BCfIGHc2NvzeY",
  //         q: search
  //       }
  //     });
  //     console.log(response);
  //     setData(response.data.data);
  //   };

  //   getGiphy();
  // }, []);

  const giphyLoding = (elem) => {
    return data.map((el) => {
      return (
        <>
          <img src={el.images.fixed_height.url} alt="images" />
        </>
      );
    });
  };

  const dataChnage = (event) => {
    setSearch(event.target.value);
  };

  const searchgiphyData = async (event) => {
    // event.prevantDefault();
    const response = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "ZGKTFPRjdkdrNEo9qb6BCfIGHc2NvzeY",
        q: search,
        limit: 10 
      }
    });
    console.log(response);
    setData(response.data.data);
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <input
            type="text"
            placeholder="Search Giphy"
            value={search}
            onChange={dataChnage}
          />
          <button onClick={searchgiphyData}>Search</button>
        </div>
        <div className="result">
          {giphyLoding()}
          {/* {data.map((elem, ind) => {
            return (
              <>
                <div className="show_giphy" key={ind}>
                  <img src={elem.images.fixed_height.url} alt="giphy" />
                </div>
              </>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Giphy;
