import * as firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const { credential: { accessToken }, user } = result;
      console.log(accessToken, user);
    })
    .catch((error) => {
      const { code, message, email, credential } = error;
      console.log(code, message, email, credential);
    });
};

export const signOutWithGoogle = () => {
  firebase.auth().signOut().then(() => {
    console.log('sign out success');
  }).catch((error) => {
    console.log('sing out error', error);
  });
};
