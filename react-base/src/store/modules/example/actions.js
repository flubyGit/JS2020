// Dispara as ações
import * as types from '../types';

const { BUTTON_CLICKED } = types;

export function clickedButton() {
  return {
    type: BUTTON_CLICKED,
  };
}
