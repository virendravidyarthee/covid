import { takeLatest } from 'redux-saga/effects';
import { LOG_USER_IN } from './actions';

function* logUserIn(action) {}

export default function* loginSaga() {
  yield takeLatest(LOG_USER_IN, logUserIn);
}
