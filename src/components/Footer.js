import "./Style/Footer.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-bar">
        <ul className="footer-list">
          <li>
            GitHub
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
          </li>
          <li>
            Stack
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
          </li>
          <li>
            LinkedIn
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
          </li>
          <li>
            Email
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
          </li>
        </ul>
      </div>
    </div>
  );
}
