import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://www.google.com">
                <i className="fab fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.youtube.com">
                <i className="fab fa-youtube-square" />
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter" />
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ehsan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Front-end Developer 💻",
                    1000,
                    "Javascript 🖥",
                    1000,
                    "CSS3 and HTML5 ⌨ ",
                    1000,
                    "React JS 🌐",
                    1000,
                  ]}
                />
              </h1> 
            </span>
            <span className="profile-role-tagline">
              Your trusted front-end developer! Expert to your needs!
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="cv-ehsan-alborzi.pdf" download="Ehsan Alborzi.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
