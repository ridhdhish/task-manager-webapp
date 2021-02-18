import React from "react";
import styles from "./login.module.css";

import BackSvg from "../../utils/backSvg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";

const login = (props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BackSvg />
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
