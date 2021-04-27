import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmqF5KtrbXw_ARPeNjVspm7ax2KmYqa68",
  authDomain: "clone-4277b.firebaseapp.com",
  projectId: "clone-4277b",
  storageBucket: "clone-4277b.appspot.com",
  messagingSenderId: "289417026213",
  appId: "1:289417026213:web:04e41951fff885d2bd8b4c",
  measurementId: "G-GTYD0MPZSL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //databse of firebase
const auth = firebase.auth(); //authintication via firebase

export { db, auth };
