import React from "react";
import styles from "./navbar.module.css";
import { IoHome, IoList } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdTimeline, MdDashboard, MdAdd } from "react-icons/md";

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div>
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
        </div>
        <div className={styles.navLower}>
          <button>
            <MdAdd style={{ marginTop: 3.5 }} color="white" size="1.7rem" />
          </button>
          <div
            style={{
              borderBottom: "1px solid #5a6c75",
              width: "2.5rem",
              marginBottom: 15,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "2.3rem",
              height: "2.3rem",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaUser size="1.5rem" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
