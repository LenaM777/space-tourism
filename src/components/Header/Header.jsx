import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/icons/logo.svg";
import burger from "../../assets/icons/icon-hamburger.svg";
import iconClose from "../../assets/icons/icon-close.svg";

const NAV_LINKS = [
  { id: "00", title: "HOME", path: "/" },
  { id: "01", title: "DESTINATION", path: "/destination" },
  { id: "02", title: "CREW", path: "/crew" },
  { id: "03", title: "TECHNOLOGY", path: "/technology" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const renderLinks = (className) =>
    NAV_LINKS.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        <span>{link.id}</span>
        {link.title}
      </NavLink>
    ));

  return (
    <header className="header">
      <div className="header__elems">
        <a href="/">
          <img className="header__logo" src={logo} alt="" />
        </a>
        <div className="header__line"></div>
      </div>
      <nav className="header__nav">
        {renderLinks("nav-link nav-link__desk")}
      </nav>
      <button
        className="header__burger"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <img src={burger} alt="" />
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button
          className="mobile-menu__btn-close"
          aria-label="Close"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(false)}
        >
          <img className="mobile-menu__close" src={iconClose} alt="" />
        </button>
        <div className="mobile-menu__nav">
          {renderLinks("nav-link nav-link__mobile")}
        </div>
      </div>
    </header>
  );
}
