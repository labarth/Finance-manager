import firebase from 'firebase';
import { Record } from 'immutable';
import { appId } from 'configFirebase';

const ReducerSchema = Record({
  user: null,
  error: null,
  loading: false,
});

export const moduleName = 'auth';
export const SING_UP_REQUEST = `${appId}/${moduleName}/SIGN_UP_REQUEST`;
export const SING_UP_SUCCESS = `${appId}/${moduleName}/SING_UP_SUCCESS`;
export const SING_IN_SUCCESS = `${appId}/${moduleName}/SING_IN_SUCCESS`;
export const SING_UP_ERROR = `${appId}/${moduleName}/SING_UP_ERROR`;

export default function reducer(state = new ReducerSchema(), action) {
  const { type, payload, error } = action;

  switch (type) {
    case SING_UP_REQUEST:
      return state.set('loading', true);
    case SING_UP_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null);
    case SING_IN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload.user)
        .set('error', null);
    case SING_UP_ERROR:
      return state
        .set('loading', false)
        .set('error', error);
    default:
      return state;
  }
}

export function signUp(email, password) {
  return (dispatch) => {
    dispatch({
      type: SING_UP_REQUEST,
    });

    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: SING_UP_SUCCESS,
        payload: {
          user,
        },
      }))
      .catch(error => dispatch({
        type: SING_UP_ERROR,
        error,
      }));
  };
}
