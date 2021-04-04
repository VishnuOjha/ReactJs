import React, { useState } from "react";
import "../components/Navbar.css";

const Navbar = () => {
  const [sizeopen, setSizeOpen] = useState(false);
  const [coloropen, setColorOpen] = useState(false);
  const [dominantcolor, setdominantcoloropen] = useState(false);
  const [type, settype] = useState(false);
  const [filetype, setfiletype] = useState(false);
  const [rights, setrights] = useState(false);

  return (
    <>
      <div className="navbar">
        <ul>
          <li
            className="Navbar-links1"
            onClick={() => {
              setSizeOpen(!sizeopen);
            }}
          >
            Size<i className="fa fa-chevron-down"></i>
            {!sizeopen && (
              <div className="image_size_filter">
                <h5>Filter by size</h5>
                <div className="image_sizes">
                  <div className="basic_sizes">
                    <ul>
                      <li>Icon</li>
                      <li>Small</li>
                      <li>Medium</li>
                      <li>Large</li>
                      <li>XLarge</li>
                      <li>XXLarge</li>
                      <li>Huge</li>
                    </ul>
                  </div>
                  <div className="custom_size">
                    <h3>Larger than:</h3>
                    {/* <MultiSelect options={options} displayvalue={data.size} /> */}
                    <button>Update</button>
                    <br />
                    <br />

                    <h3>Exactly:</h3>
                    <div className="image_size_input">
                      <input text="number" /> X <input text="number" />
                    </div>
                    <button>Update</button>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className="Navbar-links2"
            onClick={() => {
              setColorOpen(!coloropen);
            }}
          >
            ColorType
            <i className="fa fa-chevron-down"></i>
            {!coloropen && (
              <span>
                <div className="image_color_type">
                  <h2>Filter by color</h2>
                  <div className="color_type">
                    <span>
                      <div className="color1"></div>
                      <p>red</p>
                    </span>
                    <span>
                      <div className="color2"></div>
                      <p>green</p>
                    </span>
                    <span>
                      <div className="color3"></div>
                      <p>blue</p>
                    </span>
                  </div>
                </div>
              </span>
            )}
          </li>
          <li
            className="Navbar-links3"
            onClick={() => {
              setdominantcoloropen(!dominantcolor);
            }}
          >
            DominantColor<i className="fa fa-chevron-down"></i>
          </li>
          {!dominantcolor && (
            <span>
              <div className="image_color_type">
                <h2>Filter by color</h2>
                <span>
                  <div className="color1"></div>red
                </span>
                <span>
                  <div className="color2"></div>green
                </span>
                <span>
                  <div className="color13"></div>yellow
                </span>
              </div>
            </span>
          )}
          <li
            className="Navbar-links4"
            onClick={() => {
              settype(!type);
            }}
          >
            Type<i className="fa fa-chevron-down"></i>
          </li>
          {!type && (
            <span>
              <div className="image_color_type">
                <h2>Hello</h2>
              </div>
            </span>
          )}
          <li className="Navbar-link5" onClick={() => setfiletype(!filetype)}>
            FileType<i className="fa fa-chevron-down"></i>
          </li>
          {!filetype && (
            <span>
              <div className="image_color_type">
                <h2>Hello</h2>
              </div>
            </span>
          )}
          <li className="Navbar-links6" onClick={() => setrights(!rights)}>
            Rights<i className="fa fa-chevron-down"></i>
          </li>
          {!rights && (
            <span>
              <div className="image_color_type">
                <h2>Hello</h2>
              </div>
            </span>
          )}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
