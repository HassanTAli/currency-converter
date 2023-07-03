import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/finance.png";

import styles from "./Navbar.module.css";

const Navbar = ({ sidebarOpen, onSidebarChange }) => {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.show} onClick={onSidebarChange}>
            {sidebarOpen === false ? (
              <FontAwesomeIcon icon={faBars} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faX} size="xl" />
            )}
          </div>
          <div className={`${styles.list} ${styles.hide}`}>
            <ul>
              <li>
                <Link to="home">Currency Converter</Link>
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
    </>
  );
};

export default Navbar;
