import * as types from '../types';

const { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } = types;

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log('reducer', action.payload);
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    default:
      return state;
  }
}
