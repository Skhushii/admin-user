import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as userService from '../services/userService';

function* fetchUsersSaga() {
  try {
    const users = yield call(userService.fetchUsers);
    yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_USERS_FAILURE, payload: error });
  }
}

// Similarly define sagas for add, update, and delete operations

function* userSaga() {
  yield takeEvery(actionTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default userSaga;
