import {
  ADD_PROJECT,
  SET_PRIORITY_PROJECT,
  SET_LATEST_PROJECT,
  UPDATE_PRIORITY_PROJECT,
  UPDATE_RECENT_PROJECT,
  SET_ALL_PROJECT,
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
    case SET_ALL_PROJECT: {
      console.log(payload);
      return {
        ...state,
        projects: payload,
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
    case UPDATE_PRIORITY_PROJECT: {
      const oldProjects = [...state.priorityProjects];
      const index = oldProjects.findIndex((p, index) => {
        return p._id === payload._id;
      });
      oldProjects[index] = payload;
      return {
        ...state,
        priorityProjects: oldProjects,
      };
    }
    case UPDATE_RECENT_PROJECT: {
      const oldProjects = [...state.latestProjects];
      const index = oldProjects.findIndex((p, index) => {
        return p._id === payload._id;
      });
      oldProjects[index] = payload;
      console.log(oldProjects[index]);
      return {
        ...state,
        latestProjects: oldProjects,
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
