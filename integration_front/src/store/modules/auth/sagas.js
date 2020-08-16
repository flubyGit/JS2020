import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import api from '../../../services/axios';
import history from '../../../services/history';

const { LOGIN_REQUEST, PERSIST_REHYDRATE } = types;
const { loginFailure, loginSuccess } = actions;

function* loginRequest({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload);
    yield put(loginSuccess({ ...response.data }));
    toast.success('Você fez login');
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos.');
    yield put(loginFailure);
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}
export default all([
  takeLatest(LOGIN_REQUEST, loginRequest),
  takeLatest(PERSIST_REHYDRATE, persistRehydrate),
]);
