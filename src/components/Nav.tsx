import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/how-it-works", label: "How it works" },
  { to: "/materials", label: "Materials" },
  { to: "/church", label: "Church" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__bar">
        <NavLink to="/" className="nav__brand" aria-label="Vineward home">
          <img src="/assets/vineward-icon.png" alt="" className="nav__mark" width={32} height={32} />
          <span className="nav__wordmark">Vineward</span>
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <NavLink to="/download" className="btn btn--primary btn--sm">
            Get Vineward
          </NavLink>
        </div>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="nav__mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/download" className="btn btn--primary" onClick={() => setOpen(false)}>
            Get Vineward
          </NavLink>
        </div>
      )}
    </header>
  );
}
