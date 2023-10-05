import "./Style/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-bar">
        <ul className="footer-list">
          <li>
            GitHub
            <Icon icon="devicon:github" />
          </li>
          <li>Stack</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
}
