import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebarOpen, onSidebarChange }) => {
  return (
    <aside
      className={
        sidebarOpen
          ? `${styles.sidebar} ${styles.show} ${styles.active}`
          : `${styles.sidebar} ${styles.show} ${styles.close}`
      }
    >
      <div className={styles.closeSideBar} onClick={onSidebarChange}>
        <FontAwesomeIcon icon={faX} size="xl" />
      </div>
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
    </aside>
  );
};

export default Sidebar;
