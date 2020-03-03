import { fork, all } from 'redux-saga/effects';
import LoginSaga from './containers/Login/saga';

export default function*() {
  yield all([fork(LoginSaga)]);
}
