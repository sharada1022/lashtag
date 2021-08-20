import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="fab fa-typo3" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>

          <Link to="/fullset" className="nav-links">
            Fullset
          </Link>

          <Link to="/infills" className="nav-links">
            Infills
          </Link>

          <Link to="/bookappointment" className="nav-links">
            Book Appointment
          </Link>

          <li className="nav-item">
            <Link
              to="/aftercare"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              After Care
            </Link>
          </li>
        </ul>

        {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
      </div>
      ;
    </nav>
  );
}
