import firebase from 'firebase';
import { createAction } from 'redux-actions';
import { appId } from 'configFirebase';
import history from 'history';
import { getItems } from './itemActions';
import { getCategories } from './categoryActions';

export const moduleName = 'auth';

export const authActions = {
  SING_REQUEST: createAction(`${appId}/${moduleName}/SIGN_REQUEST`),
  SING_UP_SUCCESS: createAction(`${appId}/${moduleName}/SING_UP_SUCCESS`),
  SING_ERROR: createAction(`${appId}/${moduleName}/SING_ERROR`),
  SING_IN_SUCCESS: createAction(`${appId}/${moduleName}/SING_IN_SUCCESS`),
  SING_OUT_SUCCESS: createAction(`${appId}/${moduleName}/SING_OUT_SUCCESS`),
};

const {
  SING_REQUEST,
  SING_UP_SUCCESS,
  SING_ERROR,
  SING_IN_SUCCESS,
  SING_OUT_SUCCESS,
} = authActions;

const provider = new firebase.auth.GoogleAuthProvider();

export const signUp = (email, password) => (dispatch) => {
  dispatch(SING_REQUEST());

  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(SING_UP_SUCCESS(user));
    })
    .catch((error) => {
      dispatch(SING_ERROR(error));
    });
};

export const signIn = (email, password) => async (dispatch) => {
  await dispatch(SING_REQUEST());
  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  try {
    await dispatch(SING_IN_SUCCESS(user));
    await history.push('/');
  } catch (error) {
    dispatch(SING_ERROR(error));
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  await dispatch(SING_REQUEST);
  try {
    const { user } = await firebase.auth().signInWithPopup(provider);

    dispatch(SING_IN_SUCCESS(user));
    dispatch(getItems(user.uid));
    dispatch(getCategories(user.uid));
    history.push('/');
  } catch (error) {
    dispatch(SING_ERROR(error));
  }
};

export const signOut = () => (dispatch) => {
  dispatch(SING_REQUEST);

  return firebase.auth().signOut()
    .then(() => {
      dispatch(SING_OUT_SUCCESS());
    }).catch((error) => {
      dispatch(SING_ERROR(error));
    });
};

export const authChanged = () => (dispatch) => {
  dispatch(SING_REQUEST);

  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(SING_IN_SUCCESS(user));
      dispatch(getItems(user.uid));
      dispatch(getCategories(user.uid));
    } else {
      history.push('/signin');
    }
  });
};
