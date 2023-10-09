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
              <Icon
                icon="el:github"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              />
            </a>
          </li>
          <li>
            <p className="iconName">Stack</p>
            <a
              href="https://stackoverflow.com/users/22703150/provostma21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:stackoverflow"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              />
            </a>
          </li>
          <li>
            <p className="iconName">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/matthew-provost-a423aa295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:linkedin"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              />
            </a>
          </li>
          <li>
            <p className="iconName">Email</p>
            <a
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="line-md:email-twotone"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
