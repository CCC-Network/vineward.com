import { Link } from "react-router-dom";
import { church, contacts, site } from "../lib/config";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <div className="footer__wordmark">{site.name}</div>
          <p>{site.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Site</h4>
          <ul>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/materials">Materials</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Church</h4>
          <ul>
            <li>{church.name}</li>
            <li>
              <a href={church.url} target="_blank" rel="noreferrer">
                shelterofpraise-assemblyofgod.onrender.com
              </a>
            </li>
            <li>
              <a href={`mailto:${church.email}`}>{church.email}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${contacts.pastor.email}`}>{contacts.pastor.role}</a>
            </li>
            <li>
              <a href={`mailto:${contacts.developer.email}`}>{contacts.developer.role}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {year} {site.name}. Built for {church.name}.</span>
      </div>
    </footer>
  );
}
