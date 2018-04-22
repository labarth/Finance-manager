import { Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { authActions } from '../../actions/authActions';

const AuthSchema = Record({
  user: null,
  error: null,
  loading: false,
});

const initialState = new AuthSchema();

const signUpSuccessReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', payload)
  .set('error', null);

const signInSuccessReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', payload)
  .set('error', null);

const signOutSuccessReducer = (state = initialState) => state
  .set('loading', false)
  .set('user', null)
  .set('error', null);

const signRequestReducer = (state = initialState) => state
  .set('loading', true)
  .set('user', null)
  .set('error', null);

const signErrorReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', null)
  .set('error', payload);


export const auth = handleActions({
  [authActions.SING_REQUEST]: signRequestReducer,
  [authActions.SING_ERROR]: signErrorReducer,
  [authActions.SING_UP_SUCCESS]: signUpSuccessReducer,
  [authActions.SING_IN_SUCCESS]: signInSuccessReducer,
  [authActions.SING_OUT_SUCCESS]: signOutSuccessReducer,
}, initialState);
