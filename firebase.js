import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMws34EubgS0o_ie0xIE1k5uZ8MJv__Yg",
  authDomain: "social-media-rn.firebaseapp.com",
  projectId: "social-media-rn",
  storageBucket: "social-media-rn.appspot.com",
  messagingSenderId: "367271799915",
  appId: "1:367271799915:web:791ab6e99c9c9f0728152e",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
