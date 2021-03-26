import { ADD_PROJECT, SET_PRIORITY_PROJECT } from "../types";

const initialState = {
  projects: [],
  priorityProjects: [],
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default projectReducer;
