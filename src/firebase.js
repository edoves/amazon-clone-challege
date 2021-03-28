import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBQ2MXK2bWFfjtbygKa-pTbTw68P2Xdn5k",
  authDomain: "clone-mar21-44bba.firebaseapp.com",
  projectId: "clone-mar21-44bba",
  storageBucket: "clone-mar21-44bba.appspot.com",
  messagingSenderId: "471768282706",
  appId: "1:471768282706:web:48e6aa61646c3fb53a118b",
  measurementId: "G-0RX6Q06Q0N",
});

const db = firebase.firestore();

export { db };
