import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyA5q1Umw9sUJR6WYam0JxRkO3hY4rucqoI",
  authDomain: "owltrucks-b575b.firebaseapp.com",
  databaseURL: "https://owltrucks-b575b.firebaseio.com",
  projectId: "owltrucks-b575b",
  storageBucket: "owltrucks-b575b.appspot.com",
  messagingSenderId: "521049499386",
  appId: "1:521049499386:web:047106c20343d9c95b4b43",
  measurementId: "G-C63KV70R1M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase

export default firebase;
