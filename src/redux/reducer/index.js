import { combineReducers } from 'redux';
import toggleTitle from './reducers/toggleTitle';
import { AuthWithEmailReducer } from './reducers/authWithEmailAndPassword';

export default combineReducers({
  toggleTitle,
  AuthWithEmailReducer,
});
