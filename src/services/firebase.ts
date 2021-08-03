import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cineapp-e37f2.firebaseapp.com",
  databaseURL: "https://cineapp-e37f2-default-rtdb.firebaseio.com",
  projectId: "cineapp-e37f2",
  storageBucket: "cineapp-e37f2.appspot.com",
  messagingSenderId: "978114159956",
  appId: "1:978114159956:web:81a82d9fc02ae0aba594c1",
  measurementId: "G-JE5Z3W6NGT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
