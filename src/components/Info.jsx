import React from "react";
import robot from "../images/robot.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Info() {
  return (
    <div className="info">
      <img src={robot} className="info-img" />
      <div className="info-desc">
        <h3>Vujadin Dagovic</h3>
        <p className="profession">Junior Frontend Developer</p>
        <p className="site">vujadindagovic.website</p>
      </div>
      <div className="info-contact">
        <a href="#">
          <FaEnvelope />
          Email
        </a>
        <a href="#">
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
export default Info;
