import * as types from '../types';

const {
  BUTTON_CLICKED_SUCCESS,
  BUTTON_CLICKED_REQUEST,
  BUTTON_CLICKED_FAILURE,
} = types;

const initialState = {
  buttonClicked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BUTTON_CLICKED_SUCCESS: {
      console.log('Succeso =)');
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }
    case BUTTON_CLICKED_FAILURE: {
      console.log('Error =(');
      return state;
    }
    case BUTTON_CLICKED_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default:
      return state;
  }
}
