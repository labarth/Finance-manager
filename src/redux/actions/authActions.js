import { createAction } from 'redux-actions';
import { appId } from 'configFirebase';

export const moduleName = 'auth';

export const authActions = {
  SING_REQUEST: createAction(`${appId}/${moduleName}/SIGN_UP_REQUEST`),
  SING_UP_SUCCESS: createAction(`${appId}/${moduleName}/SING_UP_SUCCESS`),
  SING_ERROR: createAction(`${appId}/${moduleName}/SING_ERROR`),
  SIGN_IN_SUCCESS: createAction(`${appId}/${moduleName}/SIGN_IN_SUCCESS`),
};
