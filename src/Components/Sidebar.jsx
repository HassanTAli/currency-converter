import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={
        sidebarOpen
          ? `${styles.sidebar} ${styles.show} ${styles.active}`
          : `${styles.sidebar} ${styles.show} ${styles.close}`
      }
    >
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
