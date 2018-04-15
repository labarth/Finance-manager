import firebase from 'firebase';


export const appId = 'finance-manager-c7700';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJLDy-4p08E9xmZbXqyMCLlCU0CPdiq4s',
  authDomain: `${appId}.firebaseapp.com`,
  databaseURL: `https:/${appId}.firebaseio.com`,
  projectId: `${appId}`,
  storageBucket: `${appId}.appspot.com`,
  messagingSenderId: '113274240769',
};

firebase.initializeApp(firebaseConfig);
