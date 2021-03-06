import React from "react";
import styles from "./navbar.module.css";
import { IoHomeOutline, IoList } from "react-icons/io5";
import { MdTimeline, MdDashboard, MdAdd } from "react-icons/md";

import user from "../../assets/user2.png";

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
              <IoHomeOutline color="#ec5858" size="1.2rem" />
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
              cursor: "pointer",
            }}
          >
            <img
              style={{
                height: 40,
                width: 50,
                objectFit: "cover",
                backgroundColor: "#27292a",
              }}
              src={user}
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
