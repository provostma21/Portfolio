import React from "react";
import "../pages/Styles/Resume.css";
import ResumeDoc from "../assets/images/Matt's Resume updated2.jpg";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Skills</h2>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Express</li>
        <li>NodeJS</li>
        <li>RESTful APIs</li>
        <li>Mongoose</li>
        <li>ReactJS</li>
      </ul>
      <p>
        I have graduated from the Part-time Full-Stack Coding Boot Camp with
        Columbia University and am currently engaging in self-study to improve
        my coding skills. If you are interested, please feel free to download my
        resume below!
      </p>
      <div className="resume">
        <a href={ResumeDoc} download>
          Download Here!{" "}
        </a>
      </div>
    </div>
  );
}
