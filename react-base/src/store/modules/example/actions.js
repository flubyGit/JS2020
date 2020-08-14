// Dispara as ações
import * as types from '../types';

const {
  BUTTON_CLICKED_REQUEST,
  BUTTON_CLICKED_FAILURE,
  BUTTON_CLICKED_SUCCESS,
} = types;

export function clickedButtonRequest() {
  return {
    type: BUTTON_CLICKED_REQUEST,
  };
}
export function clickedButtonSuccess() {
  return {
    type: BUTTON_CLICKED_SUCCESS,
  };
}
export function clickedButtonFailure() {
  return {
    type: BUTTON_CLICKED_FAILURE,
  };
}
