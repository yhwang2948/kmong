import React, { useState } from "react";
import { Link as RouterLink } from "react-scroll";
import "./Navbar.css";
import Logo from "../images/Logo.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);
  const [dropdownProjects, setDropdownProjects] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (setDropdown) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = (setDropdown) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const home = () => {
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <RouterLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img className="companyLogo" src={Logo} onClick={home} />
      </RouterLink>
      <div></div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <RouterLink
            to="/about"
            className="nav-links"
            onClick={closeMobileMenu}
            spy={true}
            smooth={true}
          >
            ABOUT
          </RouterLink>
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter(setDropdownService)}
          onMouseLeave={() => onMouseLeave(setDropdownService)}
        >
          <RouterLink
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            SERVICES
            <i className='fas fa-caret-down' />
          </RouterLink>
          {dropdownService && <Dropdown id="1" />}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter(setDropdownProjects)}
          onMouseLeave={() => onMouseLeave(setDropdownProjects)}
        >
          <RouterLink
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            PROJECTS
            <i className='fas fa-caret-down' />
          </RouterLink>
          {dropdownProjects && <Dropdown id="2" />}
        </li>
        <li className="nav-item">
          <RouterLink
            to="/Contect"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            CONTACT
          </RouterLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-links"
            href="https://blog.naver.com/pms-1"
            target="_blank"
          >
            BLOG
          </a>
        </li>
      </ul>
    </nav>
  );
}
