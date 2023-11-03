import React from "react";
import "../pages/Styles/Resume.css";
import ResumeDoc from "../assets/images/Matt_Resume.pdf";
import { Icon } from "@iconify/react";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Skills</h2>
      <ul className="skills">
        <li>
          <div className="skill-name">HTML</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-html" />
        </li>
        <li>
          <div className="skill-name">CSS</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-css" />
        </li>
        <li>
          <div className="skill-name">JavaScript</div>
          <Icon className="skill-icon" icon="logos:javascript" />
        </li>
        <li>
          <div className="skill-name">ExpressJS</div>
          <Icon className="skill-icon" icon="skill-icons:expressjs-light" />
        </li>
        <li>
          <div className="skill-name">NodeJS</div>
          <Icon className="skill-icon" icon="devicon:nodejs" />
        </li>
        <li>
          <div className="skill-name">ReactJS</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-reactjs" />
        </li>
        <li>
          <div className="skill-name">Mongoose</div>
          <Icon className="skill-icon" icon="devicon:mongoose" />
        </li>
        <li>
          <div className="skill-name">MySQL</div>
          <Icon className="skill-icon" icon="skill-icons:mysql-dark" />
        </li>
        <li>
          <div className="skill-name">RESTful APIs</div>
          <Icon className="skill-icon" icon="eos-icons:api-outlined" />
        </li>
      </ul>
      <ul className="more-skills-list">
        <li></li>
      </ul>
      <p className="resume-p">
        I have graduated from the Part-time Full-Stack Coding Boot Camp with
        Columbia University and am currently engaging in self-study to improve
        my coding skills. If you are interested, please feel free to download my
        resume below!
      </p>
      <div className="resumeLink">
        <button className="resBtn">
          <a href={ResumeDoc} download="Matt_Resume.pdf">
            Download Here!{" "}
          </a>
        </button>
      </div>
    </div>
  );
}
