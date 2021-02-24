import React from "react";
import styles from "./signup.module.css";
import Logo from "../../utils/logo.png";

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
    </div>
  );
};

export default signup;
