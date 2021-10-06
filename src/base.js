import firebase from "firebase"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBBWgg9xkrKUTtu_e-GFwNrxh5izh4unms",
  authDomain: "pickastudio-34376.firebaseapp.com",
  projectId: "pickastudio-34376",
  storageBucket: "pickastudio-34376.appspot.com",
  messagingSenderId: "979891287841",
  appId: "1:979891287841:web:32745bfe8e1467b6287060"
});