import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3W6VRyCR-6jVltIQrFMeKZC37slIONSw",
  authDomain: "message-clone-f17ab.firebaseapp.com",
  databaseURL: "https://message-clone-f17ab.firebaseio.com",
  projectId: "message-clone-f17ab",
  storageBucket: "message-clone-f17ab.appspot.com",
  messagingSenderId: "250972107435",
  appId: "1:250972107435:web:48b503831f3b0a7caefdee",
  measurementId: "G-5XF77W9KJX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
