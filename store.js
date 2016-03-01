import { compose, createStore, applyMiddleware } from 'redux';
import { appReducer } from './reducer';

const finalCreateStore = compose(
  // Store Middleware
  // applyMiddleware(middlware, middleware)
)(createStore);

export const store = finalCreateStore(appReducer);

window.store = store;