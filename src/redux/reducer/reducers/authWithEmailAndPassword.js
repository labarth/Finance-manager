import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { appId } from '../../../configFirebase';

export const moduleName = 'auth';

export const authActions = {
  SING_UP_REQUEST: createAction(`${appId}/${moduleName}/SIGN_UP_REQUEST`),
  SING_UP_SUCCESS: createAction(`${appId}/${moduleName}/SING_UP_SUCCESS`),
  SING_UP_ERROR: createAction(`${appId}/${moduleName}/SING_UP_ERROR`),
};

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

export const AuthWithEmailReducer = handleActions({
  [authActions.SING_UP_REQUEST]: signUpRequestReducer,
  [authActions.SING_UP_SUCCESS]: signUpSuccessReducer,
  [authActions.SING_UP_ERROR]: signUpErrorReducer,
}, initialState);
