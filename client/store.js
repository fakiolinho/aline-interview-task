import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'

import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    routing: routerReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk, routerMiddleware(browserHistory)));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;