import React from "react";
import styles from "./login.module.css";

import BackSvg from "../../utils/wave.svg";
import Logo from "../../utils/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";

const login = (props) => {
  return (
    <div style={{ overflowY: "hidden", height: "100vh" }}>
      <div className={styles.nav}>
        <div className={styles.navHeader}>
          <img src={Logo} alt="Logo" />
          <p>Slick</p>
        </div>
        <div className={styles.navLink}>
          <p>Don't you have account?</p>
          <a href="#Login">Signup</a>
        </div>
      </div>
      <img src={BackSvg} alt="wave" />
      <div className={styles.App}>
        <div className={styles.Container}>
          <h1>Welcome back!</h1>
          <form>
            <div>
              <label>Email</label>
              <div className={styles.Input}>
                <span style={{ marginTop: 7 }}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div style={{ marginTop: 17 }}>
              <label>Password</label>
              <div className={styles.Input}>
                <span style={{ marginTop: 7 }}>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button>Log In</button>
          </form>
          <a href="#home" style={{ marginTop: 10 }}>
            Forgot password?
          </a>
        </div>
        <p>let's make the world more productive, together</p>
      </div>
    </div>
  );
};

export default login;
