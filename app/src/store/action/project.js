import { ADD_PROJECT } from "../types";
import { getToken } from "../../utils/getToken";

export const addProject = (projectData) => async (dispatch, getState) => {
  // Get token from localstorage
  const token = getToken();

  // api call
  const response = await fetch("http://localhost:3000/api/project/create", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-authorization-token": token,
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  dispatch({
    type: ADD_PROJECT,
    payload: data,
  });
};
