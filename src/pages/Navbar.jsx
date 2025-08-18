import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link to="/" onClick={closeMenu} >
        <img src="./img/our_school_logo.png" alt="Logoipsum" className="navbar-logo"/>
        </Link>
      </div>
      <button className="nav__hamburger" onClick={toggleNav} aria-label="Toggle navigation">

        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
     </button>
      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li className="dropdown">
  <span className="navbar-content dropdown-toggle">
    Home
  </span>
  <ul className="dropdown-menu">
    <li>
      <Link
        to="./AboutUs"
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Our Story
      </Link>
    </li>
    <li>
      <Link
        to="./Teaching"
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Philosophy
      </Link>
    </li>
    <li>
      <Link
        to="./Staff"
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Meet the Staff
      </Link>
    </li>
    <li>
      <Link
        to="testimonial"
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Parent Reviews
      </Link>
    </li>
  </ul>
</li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="./AboutUs"
              className="navbar-content"
            >
              At A Glance 
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="./programs"
              className="navbar-content"
            >
              Enrollment
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="./inrichment"
              className="navbar-content"
            >
              Inrichment
            </Link>
          </li>
        
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="./Contact"
        className="btn btn-outline-primary"
      >
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;