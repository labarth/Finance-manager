import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { AuthWithEmail } from './reducers/authWithEmailAndPassword';

export default combineReducers({
  router,
  AuthWithEmail,
});
