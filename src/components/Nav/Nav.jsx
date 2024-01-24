import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav_css from "./Nav.module.css";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  const openNav = () => {
    setNavOpen(true);
  };

  return (
    <nav>
      {/*Mobile View*/}

      <div className={Nav_css.open_icon}>
        <h1>ATTIREFLOW</h1>
        <box-icon name="menu" onClick={openNav}></box-icon>
      </div>

      <div
        className={
          navOpen
            ? `${Nav_css.nav_container} ${Nav_css.open_nav}`
            : Nav_css.nav_container
        }
      >
        <div>
          <box-icon name="x" onClick={closeNav}></box-icon>
        </div>
        <hr />
        <div>
          <div>
            <ul className={Nav_css.mobile_list}>
              <li>
                <Link to="/" style={{ textDecorationLine: "none" }}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <NavLink to="products" style={{ textDecorationLine: "none" }}>
                  <p>Shop</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="contact-us" style={{ textDecorationLine: "none" }}>
                  <p>Contact Us</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <Link to={"/tray"}>
              <button onClick={closeNav}>
                <box-icon
                  name="shopping-bag"
                  color="#085CB2"
                  size="md"
                  animation="tada-hover"
                  style={{ cursor: "pointer" }}
                ></box-icon>
                <span>Your Cart</span>
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>

      {/*Desktop View*/}
      <div className={Nav_css.desktop_nav}>
        <div className={Nav_css.nav_contents}>
          <h1>ATTIREFLOW</h1>
          <ul>
            <li>
              <Link to="/" style={{ textDecorationLine: "none" }}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <NavLink to="products" style={{ textDecorationLine: "none" }}>
                <p>Shop</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="contact-us" style={{ textDecorationLine: "none" }}>
                <p>Contact Us</p>
              </NavLink>
            </li>
          </ul>
          <div className={Nav_css.nav_icons}>
            <Link>
              <box-icon
                name="search"
                color="#085CB2"
                size="md"
                animation="tada-hover"
                style={{ cursor: "pointer" }}
              ></box-icon>
            </Link>
            <hr />
            <Link to="/product-details">
              <box-icon
                name="shopping-bag"
                color="#085CB2"
                size="md"
                animation="tada-hover"
                style={{ cursor: "pointer" }}
              ></box-icon>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

