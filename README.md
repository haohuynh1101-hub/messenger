# Live Demo

[Live Demo](http://103.89.85.226:5000/)

# Connect with firebase

- step 1: [Firebase](firebase.google.com) and create your project
- step 2: click on Settings and you will see projectID, web API key
- step 3: create a file named firebase.js in folder src with content:

```javascript
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "web API key",
  authDomain: "message-clone-f17ab.firebaseapp.com",
  databaseURL: "https://message-clone-f17ab.firebaseio.com",
  projectId: "projectID",
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
```

- That is steps for you to connect firebase with your app and if you want to use, please read documents firebase on
  [Firebase Documents](https://firebase.google.com/docs/storage/web/start)
