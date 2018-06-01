import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { auth } from './reducers/auth';
import { db } from './reducers/db';

export default combineReducers({
  router,
  auth,
  db,
});
