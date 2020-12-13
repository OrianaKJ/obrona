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

export const getMoviesToWatch = async (userId) => {
  const userRef = firestore.doc(`users/${userId}`);
  const snapShot = await userRef.get();
  const moviesIds = await snapShot.data().movies;
  return moviesIds;
}

export const addMovieToWatch = async (movieId, userId) => {
  const docRef = firestore.doc(`users/${userId}`);

  docRef.get().then(function(doc) {
      let movies = doc.data().movies;
      if (!movies) {
          movies = [];
      }
      if (!movies.includes(movieId) ) {
        movies.push(movieId)
      }

      return docRef.update({movies: movies});
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const movies = [];
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          movies,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
export default firebase;