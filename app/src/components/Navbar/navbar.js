import React from "react";
import styles from "./navbar.module.css";
import { IoHome, IoList } from "react-icons/io5";
import { MdTimeline, MdDashboard, MdAdd } from "react-icons/md";

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.headerMain}>
          <MdDashboard color="white" size="1.5rem" />
          <div className={styles.separator}></div>
        </div>
        <div className={styles.headerLink}>
          <a className={styles.active} href="#dashboard">
            <IoHome color="#ec5858" size="1.2rem" />
          </a>
          <a href="#dashboard">
            <IoList color="white" size="1.5rem" />
          </a>
          <a href="#dashboard">
            <MdTimeline color="white" size="1.5rem" />
          </a>
        </div>
        <div>
          <button>
            <MdAdd style={{ marginTop: 3.5 }} color="white" size="1.7rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
