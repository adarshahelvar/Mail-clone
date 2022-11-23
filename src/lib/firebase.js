import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsL-_r77CU0MWUuk7aNJM7n7zL9NHMzpY",
  authDomain: "clone-2-a3784.firebaseapp.com",
  projectId: "clone-2-a3784",
  storageBucket: "clone-2-a3784.appspot.com",
  messagingSenderId: "60659398471",
  appId: "1:60659398471:web:93369eb1c944e5ceacbe62"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
