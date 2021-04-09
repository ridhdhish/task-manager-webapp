import "./App.css";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/home";
import AllProjects from "./components/AllProjects/AllProjects";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { me } from "./store/action/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // call Me API here
    const check = async () => {
      const user = await fetch("http://localhost:3000/api/auth/me", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
          "x-authorization-token": localStorage.getItem(
            "x-authorization-token"
          ),
        },
      });

      const data = await user.json();

      if (Object.keys(data).length === 0 && data.constructor === Object) {
        // Redirect to login page
        setRedirect(true);
        return;
      }

      const token = localStorage.getItem("x-authorization-token").split(" ")[1];
      await dispatch(me(data, token));

      setRedirect(false);
    };

    check();
  }, []);

  return (
    <div>
      <Router>
        {redirect ? <Redirect to="/login" /> : []}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/projects">
            <AllProjects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
