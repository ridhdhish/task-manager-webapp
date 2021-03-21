import { AUTH_USER } from "../types";

export const login = (userData) => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (data.user) {
    localStorage.setItem("x-authorization-token", `bearer ${data.token}`);
    dispatch({
      type: AUTH_USER,
      payload: data,
    });
  }
};

export const signup = (userData) => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (data.user) {
    localStorage.setItem("x-authorization-token", `bearer ${data.token}`);
    dispatch({
      type: AUTH_USER,
      payload: data,
    });
  }
};

export const me = (userData, token) => async (dispatch, state) => {
  dispatch({
    type: AUTH_USER,
    payload: { user: { ...userData.user }, token },
  });
};
