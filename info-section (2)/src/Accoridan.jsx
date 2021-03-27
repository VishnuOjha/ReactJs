import React, { useState } from "react";
import logo from "./images/apple1.svg";
import wiki from "./images/wiki.svg";
import web from "./images/global.svg";
import twitter from "./images/twitter.svg";
import fb from "./images/fb.svg";
import insta from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import "./styles.css";

const Accordian = () => {
  const [isOpen, setisOpen] = useState(false);
  const [textOpen, istextOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="info-section">
        <div className="company-heading">
          <div className="company-name">
            <img src={logo} alt="Apple logo" />
            <h2>Apple Inc.</h2>
            <a href="http://apple.com" target="_blank">
              Apple.com
            </a>

            <p className="discription">
              Apple Inc. is an American multinational technology company
              headquartered in Cupertino, California, that designs, develops,
              and sells consumer electronics, computer software, and online
              services. It is considered one of the Big Five companies in the
              U.S. information technology industry, along with Amazon, Google,
              Microsoft, and Facebook.
              {!textOpen && (
                <span className="readmore">
                  Its hardware products include the iPhone smartphone, the iPad
                  tablet computer, the Mac personal computer, the iPod portable
                  media player, the Apple Watch smartwatch, the Apple TV digital
                  media player, the AirPods wireless earbuds, the AirPods Max
                  headphones, and the HomePod smart speaker line. Apple's
                  software includes iOS, iPadOS, macOS, watchOS, and tvOS
                  operating systems, the iTunes media player, the Safari web
                  browser, the Shazam music identifier, and the iLife and iWork
                  creativity and productivity suites, as well as professional
                  applications like Final Cut Pro X, Logic Pro, and Xcode
                  <br />
                </span>
              )}
              <button
                className="btn-textOpen"
                onClick={() => {
                  istextOpen(!textOpen);
                }}
              >
                {textOpen ? "Readmore..." : "Readless"}
              </button>
              <br />
              <a href="https://en.wikipedia.org/wiki/Apple_Inc.">Wikipedia</a>
            </p>
          </div>
        </div>

        <div className="accordian">
          <div className="accordian-content">
            <div className="company-formername">
              <span>Formerly called:</span>
              Apple Computer Company, (1976–1977), Apple Computer, Inc,
              (1977–2007)
            </div>

            <div className="company-type">
              <span>Type:</span>
              Public
            </div>
            <div className="company-founded">
              <span>Founded:</span>April 01, 1976
            </div>
            <div className="company-founders">
              <span>Founders:</span>Steve Jobs, Steve Wozniak, Ronald Wayne
            </div>
            <div className="company-keyPeopels">
              <span>Key people:</span>
              Chairman: Arthur D. Levinson, CEO: Tim Cook, COO: Jeff Williams
            </div>
            {!isOpen && (
              <span>
                <div className="company-trad">
                  <span>Traded as:</span>NASDAQ: aapl AAPL, NASDAQ-100
                  component, DJIA component, S&P 100 component, S&P 500
                  component
                </div>
                <div className="company-industry-type">
                  <span>Industry:</span>Computer hardware, Computer software,
                  Consumer electronics, Cloud computing, Digital distribution,
                  Fabless silicon design, Semiconductors, Media, Retail,
                  Financial technology
                </div>

                <div className="company-stores">
                  <span>Number of locations:</span>
                  510 retail stores(2020)
                </div>
                <div className="company-coverdArea">
                  <span>Area served:</span>Worldwide
                </div>

                <div className="company-revenue">
                  <span>Revenue:</span>US$ 274.515 billion (2020)
                </div>
                <div className="company-operatingIncome">
                  <span>Operating income:</span>
                  US$ 66.288 billion (2020)
                </div>
                <div className="company-assests">
                  <span>Total assets:</span>US$ 323.888 billion (2020)
                </div>
                <div className="company-equity">
                  <span>Total equity:</span>US$ 65.339 billion (2020)
                </div>
                <div className="company-numofEmployees">
                  <span>Number of employees:</span>
                  147,000(2020)
                </div>
                <div className="company-subsidiaries">
                  <span>Subsidiaries:</span>Braeburn Capital, Beats Electronics,
                  Claris, Apple Energy, LLC, Apple Sales International, Apple
                  Services, Apple Worldwide Video, Anobit, Beddit
                </div>
              </span>
            )}
            <div className="company-social">
              <ul>
                <li>
                  <img src={wiki} alt="wikiLogo" />
                  <a href="">Wikipedia</a>
                </li>
                <li>
                  <img src={web} alt="WebsiteLogo" />
                  <a href="">Website</a>
                </li>
                <li>
                  <img src={twitter} alt="twitterLogo" />
                  <a href="">Twitter</a>
                </li>
                <li>
                  <img src={fb} alt="fbLogo" />
                  <a href="">Facebook</a>
                </li>
                <li>
                  <img src={insta} alt="InstagramLogo" />
                  <a href="">Instagram</a>
                </li>
                <li>
                  <img src={youtube} alt="YTLogo" />
                  <a href="">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="accordian-button"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            {isOpen ? "+" : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
