import React, { useState, useContext } from "react";
/* import { Button } from "./Button"; */
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { productCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <Link to="/bit02spa" className="navbar-logo" onClick={closeMobileMenu}>
          BITSTORE <i class="fab fa-sketch" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/bit02spa"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav_button"
              onClick={closeMobileMenu}
            >
              Login{" "}
              <span>
                <i className="fas fa-sign-in-alt"></i>{" "}
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav_button"
              onClick={closeMobileMenu}
            >
              Register{" "}
              <span>
                <i className="fas fa-user"></i>{" "}
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        <Link to="/bit02spa/cart" className="nav_button">
          <div>
            <span>Cart ({productCount})</span>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
