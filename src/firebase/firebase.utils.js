import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2qHbb91BY1jxpjyNlJEcNNu1Ooroc-Fs",
    authDomain: "nexcart-db.firebaseapp.com",
    projectId: "nexcart-db",
    storageBucket: "nexcart-db.appspot.com",
    messagingSenderId: "465334626239",
    appId: "1:465334626239:web:1ef9acac741547944b630a",
    measurementId: "G-KGN1N1XLMR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;