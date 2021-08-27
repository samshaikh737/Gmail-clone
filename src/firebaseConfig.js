import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKRmjTcHdLfYIhG7KpJAFcA4vuJSn0ZWY",
    authDomain: "sameer-mail-clone.firebaseapp.com",
    projectId: "sameer-mail-clone",
    storageBucket: "sameer-mail-clone.appspot.com",
    messagingSenderId: "634850186534",
    appId: "1:634850186534:web:fd93a101950595e5a05de7",
    measurementId: "G-VT6XZFHD5B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const firebaseProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, firebaseProvider };