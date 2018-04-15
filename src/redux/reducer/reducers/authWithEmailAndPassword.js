import firebase from 'firebase';
import { Record } from 'immutable';
import { appId } from 'configFirebase';
import { handleActions } from 'redux-actions';
import authWithEmailAndPasswordActions from 'redux/actions/authWithEmailAndPassowrdActions';

export const moduleName = 'auth';

const initialState = Record({
  user: null,
  error: null,
  loading: false,
});

const signUpRequestReducer = (state = initialState) => state.set('loading', true);
const signUpSuccessReducer = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('user', payload.user)
  .set('error', null);
const signUpErrorReducer = (state = initialState, { error }) => state
  .set('loading', false)
  .set('error', error);

export default handleActions({
  [authWithEmailAndPasswordActions.SING_UP_REQUEST]: signUpRequestReducer,
  [authWithEmailAndPasswordActions.SING_UP_SUCCESS]: signUpSuccessReducer,
  [authWithEmailAndPasswordActions.SING_UP_ERROR]: signUpErrorReducer,
}, initialState);

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
