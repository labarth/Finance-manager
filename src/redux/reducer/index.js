import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { auth } from './reducers/auth';
import { costList } from './reducers/costList';
import { categories } from './reducers/categories';

export default combineReducers({
  router,
  auth,
  costList,
  categories,
});
