import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDSr95TTKPmUkKY1oBXS0VV9FUKKwND6JE",
    authDomain: "whatsappclone-4e9c2.firebaseapp.com",
    projectId: "whatsappclone-4e9c2",
    storageBucket: "whatsappclone-4e9c2.appspot.com",
    messagingSenderId: "250768610493",
    appId: "1:250768610493:web:136626a3fbaa4111a293d4",
    measurementId: "G-E53YC2NEFG"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider(auth);
export {auth, provider};
export default db;