import { SET_EMAIL, SET_PASSWORD, LOG_USER_IN, LOGIN_SUCCEEDED, LOGIN_FAILED } from './actions';

const initialState = {
  email: '',
  password: '',
  is_loading: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload.email };
    case SET_PASSWORD:
      return { ...state, password: action.payload.password };
    case LOG_USER_IN:
      return { ...state, is_loading: true };
    case LOGIN_SUCCEEDED:
      return { ...state, is_loading: false };
    case LOGIN_FAILED:
      return { ...state, is_loading: false };
    default:
      return state;
  }
}

export function getEmail(state) {
  return state.loginReducer.email;
}

export function getPassword(state) {
  return state.loginReducer.password;
}

export function getIsLoading(state) {
  return state.loginReducer.is_loading;
}
