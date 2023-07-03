import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({ sidebarOpen, onSidebarChange }) => {
  return (
    <aside
      className={
        sidebarOpen
          ? `${styles.sidebar} ${styles.show} ${styles.active}`
          : `${styles.sidebar} ${styles.show} ${styles.close}`
      }
    >
      <ul>
        <li onClick={onSidebarChange}>
          <Link to="home">Currency Converter</Link>
        </li>
        <li onClick={onSidebarChange}>
          <Link to="contact-us">Contact Us</Link>
        </li>
        <li onClick={onSidebarChange}>
          <Link to="about-us">About Us</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
