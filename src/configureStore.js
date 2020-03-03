import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from './rootSaga';
import loginReducer from '../src/containers/Login/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
