import "./App.css";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/home";

import { useEffect, useState } from "react";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./store/reducer/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  const [redirect, setRedirect] = useState(false);

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
      }

      setRedirect(false);
    };

    check();
  }, []);

  return (
    <Provider store={store}>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
