import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from '../reducer/taskReducer';

const rootReducer = combineReducers({taskReducer});

const middleware = [thunk];
const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()
    :f=>f
  )
);

export default store;