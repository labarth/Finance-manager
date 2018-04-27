import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { auth } from './reducers/auth';
import { db } from './reducers/db';
import { categories } from './reducers/categories';

export default combineReducers({
  router,
  auth,
  db,
  categories,
});
