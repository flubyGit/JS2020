// Dispara as ações
import * as types from '../types';

const { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } = types;

export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}
export function loginFailure(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}
