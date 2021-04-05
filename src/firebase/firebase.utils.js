import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIg4RQrpHcRRE_LSKelZknEfZ7oaEa9TM",
    authDomain: "react-one-991e5.firebaseapp.com",
    projectId: "react-one-991e5",
    storageBucket: "react-one-991e5.appspot.com",
    messagingSenderId: "1013510644645",
    appId: "1:1013510644645:web:b2febdb494c42a701ebe4c",
    measurementId: "G-907F377CR1"
};
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;