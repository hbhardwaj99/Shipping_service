import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../typesOfAction/authTypes";

const initState = {
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: "Login Failed",
      };
    case SIGNOUT_SUCCESS:
      console.log("sign out");
      return state;
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      console.log("signup error", action.error.message);
      return {
        ...state,
        authError: "Email address is already registered!!",
      };
    default:
      return state;
  }
};
export default authReducer;
