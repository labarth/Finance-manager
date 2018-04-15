import { Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { authActions } from '../../actions/authWithEmailAndPasswordActions';

const AuthSchema = Record({
  user: null,
  error: null,
  loading: false,
});

const initialState = new AuthSchema();

const signUpRequestReducer = (state = initialState) => state.set('loading', true);

const signUpSuccessReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', payload)
  .set('error', null);

const signUpErrorReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('error', payload);

export const AuthWithEmail = handleActions({
  [authActions.SING_UP_REQUEST]: signUpRequestReducer,
  [authActions.SING_UP_SUCCESS]: signUpSuccessReducer,
  [authActions.SING_UP_ERROR]: signUpErrorReducer,
}, initialState);
