import {
  ADD_PROJECT,
  SET_PRIORITY_PROJECT,
  SET_LATEST_PROJECT,
} from "../types";

const initialState = {
  projects: [],
  priorityProjects: [],
  latestProjects: [],
};

const projectReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PROJECT: {
      const newProjects = [...state.projects];
      newProjects.push({ ...payload.project });
      return {
        ...state,
        projects: newProjects,
      };
    }
    case SET_PRIORITY_PROJECT: {
      return {
        ...state,
        priorityProjects: payload,
      };
    }
    case SET_LATEST_PROJECT: {
      return {
        ...state,
        latestProjects: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default projectReducer;
