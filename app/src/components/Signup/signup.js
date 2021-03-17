import React, { useState } from "react";
import styles from "./signup.module.css";

import BackSvg from "../../utils/wave.svg";
import Logo from "../../utils/logo.png";

import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { signup } from "../../store/action/auth";

const Signup = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const signupHandler = async () => {
    if (user.password.length < 6) {
      setPasswordError(true);
    } else {
      await dispatch(signup(user));
      const token = localStorage.getItem("x-authorization-token");
      if (token) {
        history.push("/");
      }
    }
  };

  return (
    <div style={{ overflowY: "hidden", height: "100vh" }}>
      <div className={styles.nav}>
        <div className={styles.navHeader}>
          <img src={Logo} alt="Logo" />
          <p>Slick</p>
        </div>
        <div className={styles.navLink}>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
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
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
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
                  onChange={(e) => {
                    if (e.target.value.length > 5) {
                      setPasswordError(false);
                    }
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                {passwordError ? (
                  <p
                    style={{ color: "red", marginLeft: -10, marginBottom: 20 }}
                  >
                    Password must be of atleast 6 characters
                  </p>
                ) : (
                  []
                )}
              </div>
            </div>
          </form>
          <button
            onClick={() => {
              if (user.email && user.password) {
                signupHandler();
              }
            }}
            className={styles.button}
          >
            Signup
          </button>
        </div>
        <p>let's make the world more productive, together</p>
      </div>
    </div>
  );
};

export default Signup;
