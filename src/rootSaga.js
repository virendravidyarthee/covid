import { fork, all } from 'redux-saga/effects';
import LoginSaga from './containers/Home/saga';

export default function*() {
  yield all([fork(LoginSaga)]);
}
