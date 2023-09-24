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
          <Icon icon="vscode-icons:file-type-html" />
        </li>
        <li>
          <div>CSS</div>
          <Icon icon="vscode-icons:file-type-css" />
        </li>
        <li>
          <div>JavaScript</div>
          <Icon icon="logos:javascript" />
        </li>
        <li>
          <div>ExpressJS</div>
          <Icon icon="skill-icons:expressjs-light" />
        </li>
        <li>NodeJS</li>
        <li>RESTful APIs</li>
        <li>Mongoose</li>
        <li>ReactJS</li>
        <li>MySQL</li>
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
