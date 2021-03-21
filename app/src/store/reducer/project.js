import { ADD_PROJECT } from "../types";

const initialState = {
  projects: [],
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default projectReducer;
