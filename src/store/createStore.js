
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from 'redux-logger';

const middlewares = [thunk.withExtraArgument()];

if (__DEV__) {
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default (preloadedState = {}) => {
    const rootReducer = combineReducers({ ...reducers });
    return createStore(rootReducer, preloadedState, middleware)
}
