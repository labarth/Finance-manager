import { combineReducers } from 'redux';
import toggleTitle from './reducers/toggleTitle';
import { AuthWithEmail } from './reducers/authWithEmailAndPassword';

export default combineReducers({
  toggleTitle,
  AuthWithEmail,
});
