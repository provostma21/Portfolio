import "./Style/Footer.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  const emailAddress = "provostmat@gmail.com";

  return (
    <div className="footer-container">
      <div className="footer-bar">
        <ul className="footer-list">
          <li>
            <p className="iconName">GitHub</p>
            <a
              href="https://github.com/provostma21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="el:github" className="footer-icon" />
            </a>
          </li>
          <li>
            <p className="iconName">Stack</p>
            <a
              href="https://stackoverflow.com/users/22703150/provostma21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="devicon:stackoverflow" className="footer-icon" />
            </a>
          </li>
          <li>
            <p className="iconName">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/matthew-provost-a423aa295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="devicon:linkedin" className="footer-icon" />
            </a>
          </li>
          <li>
            <p className="iconName">Email</p>
            <a
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="line-md:email-twotone" className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
