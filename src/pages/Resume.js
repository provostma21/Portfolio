import React from "react";
import "../pages/Styles/Resume.css";
import ResumeDoc from "../assets/images/Matt's Resume updated2.jpg";
import { Icon } from "@iconify/react";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Skills</h2>
      <ul className="skills">
        <li>
          <div>HTML</div>
          <Icon
            icon="vscode-icons:file-type-html"
            style={{
              height: "75px",
              width: "75px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="icon"
          />
        </li>
        <li>
          <div>CSS</div>
          <Icon
            icon="vscode-icons:file-type-css"
            style={{
              height: "75px",
              width: "75px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="icon"
          />
        </li>
        <li>
          <div>JavaScript</div>
          <Icon
            icon="logos:javascript"
            style={{
              height: "60px",
              width: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="icon"
          />
        </li>
        <li>
          <div>ExpressJS</div>
          <Icon
            icon="skill-icons:expressjs-light"
            style={{
              height: "60px",
              width: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="icon"
          />
        </li>
        <li>
          <div>NodeJS</div>
          <Icon icon="devicon:nodejs" className="icon" />
        </li>
        <li>
          <div>ReactJS</div>
          <Icon icon="vscode-icons:file-type-reactjs" className="icon" />
        </li>
        <li>
          <div>Mongoose</div>
          <Icon icon="devicon:mongoose" className="icon" />
        </li>
        <li>
          <div>MySQL</div>
          <Icon icon="skill-icons:mysql-dark" className="icon" />
        </li>
        <li>RESTful APIs</li>
      </ul>
      <p>
        I have graduated from the Part-time Full-Stack Coding Boot Camp with
        Columbia University and am currently engaging in self-study to improve
        my coding skills. If you are interested, please feel free to download my
        resume below!
      </p>
      <div className="resumeLink">
        <button className="resBtn">
          <a href={ResumeDoc} download>
            Download Here!{" "}
          </a>
        </button>
      </div>
    </div>
  );
}
