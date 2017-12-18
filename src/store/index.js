import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import reducer from '../reducers';

export const history = createBrowserHistory();
const middlewares = [promiseMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
