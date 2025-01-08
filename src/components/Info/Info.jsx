import React from "react";
import "./Info.css";
import { bgElement2, studentIcon, videoIcon } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-grey">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt="" />
            <div className="amount">26 HRS</div>
            <div className="type">video content</div>
          </div>
        </div>
        <img className='bgElement2'src={bgElement2} alt="" />
      </div>
    </section>
  );
};

export default Info;
