import { createAction } from 'redux-actions';
import { appId } from 'configFirebase';
import { moduleName } from 'redux/reducer/reducers/authWithEmailAndPassword';

export default {
  SING_UP_REQUEST: createAction(`${appId}/${moduleName}/SIGN_UP_REQUEST`),
  SING_UP_SUCCESS: createAction(`${appId}/${moduleName}/SING_UP_SUCCESS`),
  SING_UP_ERROR: createAction(`${appId}/${moduleName}/SING_UP_ERROR`),
};

