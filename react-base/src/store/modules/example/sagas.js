import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const { BUTTON_CLICKED_SUCCESS } = types;
const { clickedButtonFailure, clickedButtonSuccess } = actions;

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(clickedButtonSuccess);
  } catch (error) {
    yield put(clickedButtonFailure);
  }
}
export default all([takeLatest(BUTTON_CLICKED_SUCCESS, exampleRequest)]);
