import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const { LOGIN_REQUEST } = types;
// const { } = actions;

function* loginRequest({ payload }) {
  console.log('Saga', payload);
}
export default all([takeLatest(LOGIN_REQUEST, loginRequest)]);
