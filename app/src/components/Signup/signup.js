import React from "react";
import styles from "./signup.module.css";

import BackSvg from "../../utils/wave.svg";
import Logo from "../../utils/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";

const signup = (props) => {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.navHeader}>
          <img src={Logo} alt="Logo" />
          <p>Slick</p>
        </div>
        <div className={styles.navLink}>
          <p>Already have an account?</p>
          <a href="#Login">Login</a>
        </div>
      </div>
      <img src={BackSvg} alt="wave" />
      <div className={styles.App}>
        <div className={styles.Container}>
          <h1>Create new account</h1>
          <form style={{ marginTop: 10 }}>
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
            <button>Signup</button>
          </form>
        </div>
        <p>let's make the world more productive, together</p>
      </div>
    </div>
  );
};

export default signup;
