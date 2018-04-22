import firebase from 'firebase';
import { createAction } from 'redux-actions';
import { appId } from 'configFirebase';

export const moduleName = 'auth';

export const authActions = {
  SING_REQUEST: createAction(`${appId}/${moduleName}/SIGN_REQUEST`),
  SING_UP_SUCCESS: createAction(`${appId}/${moduleName}/SING_UP_SUCCESS`),
  SING_ERROR: createAction(`${appId}/${moduleName}/SING_ERROR`),
  SING_IN_SUCCESS: createAction(`${appId}/${moduleName}/SING_IN_SUCCESS`),
};

const { SING_REQUEST, SING_UP_SUCCESS, SING_ERROR, SING_IN_SUCCESS } = authActions;
const provider = new firebase.auth.GoogleAuthProvider();

export const signUp = (email, password) => (dispatch) => {
  dispatch(SING_REQUEST());

  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(SING_UP_SUCCESS(user));
    })
    .catch((error) => {
      dispatch(SING_ERROR(error));
      // this.handleOpenModal();
    });
};

export const signIn = (email, password) => (dispatch) => {
  dispatch(SING_REQUEST());

  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(SING_IN_SUCCESS(user));
    })
    .catch((error) => {
      dispatch(SING_ERROR(error));
      // this.handleOpenModal();
    });
};

export const signInWithGoogle = () => (dispatch) => {
  dispatch(SING_REQUEST);

  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const { user } = result;
      dispatch(SING_IN_SUCCESS(user));
    })
    .catch((error) => {
      dispatch(SING_ERROR(error));
    });
};

export const signOut = () => (dispatch) => {
  dispatch(SING_REQUEST);

  return firebase.auth().signOut()
    .then(() => {
      dispatch(SING_IN_SUCCESS(null));
    }).catch((error) => {
      dispatch(SING_ERROR(error));
    });
};

