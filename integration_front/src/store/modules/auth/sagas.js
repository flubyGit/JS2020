/* eslint-disable consistent-return */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import api from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Você fez login');
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure);
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}
function* registerRequest({ payload }) {
  const { id, name, email, password } = payload;
  try {
    if (id) {
      yield call(api.put, 'users', {
        email,
        name,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      yield call(api.post, 'users', {
        email,
        name,
        password,
      });
      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      history.push('/login');
    }
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);
    const status = get(error, 'response.status', '');

    if (status === 401) {
      toast.error('Você precisa fazer login novamente');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error(new Error('Erro desconhecido'));
    }
    yield put(actions.registerFailure());
  }
}
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
