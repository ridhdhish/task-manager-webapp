import "./App.css";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/home";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./store/reducer/auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
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
