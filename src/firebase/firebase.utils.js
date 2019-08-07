import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGARPaoD8aBkfNyK49S22jtxEXRHT6Jpw",
    authDomain: "crwn-db-a2943.firebaseapp.com",
    databaseURL: "https://crwn-db-a2943.firebaseio.com",
    projectId: "crwn-db-a2943",
    storageBucket: "",
    messagingSenderId: "206685511083",
    appId: "1:206685511083:web:faf324063d96e2d0"
  };

  firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGooggle = ()=>{
  auth.signInWithPopup(provider);
}

export default firebase;


