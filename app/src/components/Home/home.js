import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./home.module.css";

import { useHistory } from "react-router-dom";

import { FaRegFolderOpen } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";

const Home = (props) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("x-authorization-token");
    if (!token) {
      history.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ width: "97.5vw", display: "flex" }}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.main}>
          <h1>
            Welcome back, <span>Ridhdhish</span>
          </h1>
          <div className={styles.separator}></div>

          <div className={styles.recentSection}>
            <h2>Recent projects</h2>
            <div style={{ display: "flex" }}>
              <div className={styles.card}>
                <div className={styles.logo}>
                  <p>R</p>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.title}>Random shop</p>
                  <p style={{ color: "gray" }}>
                    <span style={{ color: "#3862df" }}>21 tasks</span> |{" "}
                    <span style={{ color: "#ec5858" }}>2 sep 21</span>
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      marginTop: "0.8rem",
                      fontWeight: 700,
                      color: "gray",
                    }}
                  >
                    Members
                  </p>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ backgroundColor: "green" }}
                      className={styles.user}
                    >
                      <p>M</p>
                    </div>
                    <div className={styles.user}>
                      <p>R</p>
                    </div>
                    <div
                      className={styles.user}
                      style={{ backgroundColor: "red" }}
                    >
                      <p>S</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.prioritySection}>
            <h2>Priority projects</h2>
            <div className={styles.pCard}>
              <p className={styles.pTitle}>Comic Storyboard</p>
              <div style={{ display: "flex", color: "#efefee" }}>
                <FaRegFolderOpen />
                <p>37 Tasks</p>
              </div>
              <div style={{ display: "flex", color: "#efefee" }}>
                <RiTimerLine />
                <p>3 Days Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
