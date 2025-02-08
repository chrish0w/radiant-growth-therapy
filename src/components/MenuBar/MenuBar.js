import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const location = useLocation(); // Get the current page location

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Function to scroll to the top when a menu item is clicked
  const handleLinkClick = (event, path) => {
    if (location.pathname === path) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`menu-bar ${isHidden ? "hidden" : ""}`}>
      {/* Move Logo to the left */}
      <div className="logo-container">
        <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
          <img src="/radiant_logo_no_words.png" alt="Business Logo" className="logo" />
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="menu-items">
        <li><Link to="/" onClick={(e) => handleLinkClick(e, "/")}>Home</Link></li>
        <li><Link to="/about" onClick={(e) => handleLinkClick(e, "/about")}>About</Link></li>
        <li><Link to="/services" onClick={(e) => handleLinkClick(e, "/services")}>Services</Link></li>
        <li><Link to="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
