import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/icons/logo.svg";
import burger from "../../assets/icons/icon-hamburger.svg";
import iconClose from "../../assets/icons/icon-close.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__elems">
        <a href="/">
          <img className="header__logo" src={logo} alt="logo" />
        </a>
        <div className="header__line"></div>
      </div>
      <nav className="header__nav">
        <NavLink to="/" className="nav-link nav-link__desk">
          <span>00</span>home
        </NavLink>
        <NavLink to="/destination" className="nav-link nav-link__desk">
          <span>01</span>destination
        </NavLink>
        <NavLink to="/crew" className="nav-link nav-link__desk">
          <span>02</span>crew
        </NavLink>
        <NavLink to="/technology" className="nav-link nav-link__desk">
          <span>03</span>technology
        </NavLink>
      </nav>
      <button className="header__burger">
        <img src={burger} alt="burger" />
      </button>
      <div className="mobile-menu">
        <button className="mobile-menu__btn-close">
          <img className="mobile-menu__close" src={iconClose} alt="close" />
        </button>
        <div className="mobile-menu__nav">
          <NavLink to="/" className="nav-link nav-link__mobile">
            <span>00</span>home
          </NavLink>
          <NavLink to="/destination" className="nav-link nav-link__mobile">
            <span>01</span>destination
          </NavLink>
          <NavLink to="/crew" className="nav-link nav-link__mobile">
            <span>02</span>crew
          </NavLink>
          <NavLink to="/technology" className="nav-link nav-link__mobile">
            <span>03</span>technology
          </NavLink>
        </div>
      </div>
    </header>
  );
}
