import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDycQT5UU08NY-1hhDetgSjuGHLUqiAupw",
  authDomain: "linkedin-clone-react-68ffd.firebaseapp.com",
  projectId: "linkedin-clone-react-68ffd",
  storageBucket: "linkedin-clone-react-68ffd.appspot.com",
  messagingSenderId: "935516555562",
  appId: "1:935516555562:web:22c5e11ecd50226b85f653",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
