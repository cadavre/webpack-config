import { applyMiddleware, createStore, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import api from '../services/api';

import reducers from '../reducers';
import logics from '../logics';

const isDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined;
const logicMiddleware = createLogicMiddleware(logics, { api });
const middleware = applyMiddleware(logicMiddleware);

const enhancer = isDevTools
  ? compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  : middleware;

export default createStore(reducers, enhancer);
