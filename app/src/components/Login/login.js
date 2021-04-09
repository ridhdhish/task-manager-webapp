import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./login.module.css";

import BackSvg from "../../utils/wave.svg";
import Logo from "../../utils/logo.png";

import { Link, useHistory, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";

import { login } from "../../store/action/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth.user.email);
    if (auth.user.email) {
      history.push("/");
    }
  }, [auth.user]);

  const loginHandler = async () => {
    await dispatch(login({ email, password }));
    const token = localStorage.getItem("x-authorization-token");
    if (token) {
      history.push("/");
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
          <p>Don't you have account?</p>
          <Link to="/signup">Signup</Link>
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
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <button
            onClick={() => {
              if (email && password) {
                loginHandler();
              }
            }}
            className={styles.button}
          >
            Log In
          </button>
          <a href="#home" style={{ marginTop: 0 }}>
            Forgot password?
          </a>
        </div>
        <p>let's make the world more productive, together</p>
      </div>
    </div>
  );
};

export default Login;
