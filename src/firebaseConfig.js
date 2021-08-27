import firebase from 'firebase';

const firebaseConfig = {
    //firebaseConfig
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const firebaseProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, firebaseProvider };