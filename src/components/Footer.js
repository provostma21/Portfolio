import "./Style/Footer.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-bar">
        <ul className="footer-list">
          <li>
            GitHub
            <Icon icon="devicon:github" />
          </li>
          <li>
            Stack
            <Icon icon="devicon:stackoverflow" />
          </li>
          <li>
            LinkedIn
            <Icon icon="devicon:linkedin" />
          </li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
}
