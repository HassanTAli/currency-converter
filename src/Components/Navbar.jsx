import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/finance.png";

import styles from "./Navbar.module.css";

const Navbar = ({ onSidebarChange }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.show} onClick={onSidebarChange}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <div className={`${styles.list} ${styles.hide}`}>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
