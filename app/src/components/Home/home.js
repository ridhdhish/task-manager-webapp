import React from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

const home = (props) => {
  return (
    <div className={styles.container}>
      <div style={{ width: "100%", height: "100%" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default home;
