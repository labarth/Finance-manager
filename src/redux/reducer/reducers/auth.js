import { Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { authActions } from '../../actions/authActions';

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

const signInSuccessReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', payload);

const signOutSuccessReducer = (state = initialState) => state
  .set('loading', false)
  .set('user', null);

export const auth = handleActions({
  [authActions.SING_REQUEST]: signUpRequestReducer,
  [authActions.SING_UP_SUCCESS]: signUpSuccessReducer,
  [authActions.SING_ERROR]: signUpErrorReducer,
  [authActions.SING_IN_SUCCESS]: signInSuccessReducer,
  [authActions.SING_OUT_SUCCESS]: signOutSuccessReducer,
}, initialState);
