import { AUTH_USER } from "../types";

const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      console.log(payload);
      return {
        ...state,
        user: { ...payload.user, token: payload.token },
      };
    default:
      return state;
  }
};

export default authReducer;
