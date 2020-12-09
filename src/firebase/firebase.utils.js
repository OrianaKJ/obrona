import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDiHaEmRFHp1e1jJb4coJPZLOxc4hKPoIY",
    authDomain: "tvseries-db.firebaseapp.com",
    projectId: "tvseries-db",
    storageBucket: "tvseries-db.appspot.com",
    messagingSenderId: "251129391545",
    appId: "1:251129391545:web:26dc9ede3a8823d4002e68"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
export default firebase;