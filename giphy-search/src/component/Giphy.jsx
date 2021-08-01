import axios from "axios";
import React, { useEffect, useState } from "react";
import "../component/giphy.css";
import Loader from "./Loding";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGiphy = async () => {
      setIsLoading(true);
      const response = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "ZGKTFPRjdkdrNEo9qb6BCfIGHc2NvzeY",
          limit: 100000
        }
      });
      console.log(response);
      setData(response.data.data);
      setIsLoading(false);
    };

    getGiphy();
  }, []);

  const searchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const seachClick = async (event) => {
    const response = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "ZGKTFPRjdkdrNEo9qb6BCfIGHc2NvzeY",
        q: search
      }
    });
    console.log(response);

    setData(response.data.data);
  };

  const giphyLoding = (elem) => {
    if (isLoading) {
      return <Loader />;
    }
    return data.map((el) => {
      return (
        <>
          <img src={el.images.fixed_height.url} alt="" />
        </>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <input
            type="text"
            className="search_txt"
            placeholder="type to search"
            onChange={searchChange}
            value={search}
          />
          <span className="icon" onClick={seachClick}>
            <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="result">{giphyLoding()}</div>
      </div>
    </>
  );
};

export default Giphy;
