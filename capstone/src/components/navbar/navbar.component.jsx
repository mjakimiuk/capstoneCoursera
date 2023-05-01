import React from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../../assets/images/navbar/navbar.logo.png";

import styles from "./navbar.module.css";

const NavbarComponent = (props) => {
  const navLinks = [
    { id: "nav1", title: "Home", path: "/" },
    { id: "nav2", title: "About", path: "/about" },
    { id: "nav3", title: "Menu", path: "/menu" },
    {
      id: "nav4",
      title: "Reservations",
      path: "/reservations",
    },
    {
      id: "nav5",
      title: "Online Order",
      path: "/online-order",
    },
    { id: "nav6", title: "Login", path: "/login" },
  ];
  return (
    <nav>
      <ul className={styles["navbar"]}>
        <li className={styles["logoContainer"]}>
          <Link to="/">
            <img src={NavBarLogo} alt="NavBarLogo" />
          </Link>
        </li>
        <ul className={styles["textMenuContainer"]}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path} style={{ textDecoration: "none" }}>
                <span className={styles[`textMenu`]}>
                  <span>
                    {link.title}
                    <span />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
