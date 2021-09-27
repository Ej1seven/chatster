import * as firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcUSoG5Y93hsifS17N9wgXIMstnVwlnCQ",
  authDomain: "chat-application-db.firebaseapp.com",
  databaseURL: "https://chat-application-db-default-rtdb.firebaseio.com",
  projectId: "chat-application-db",
  storageBucket: "chat-application-db.appspot.com",
  messagingSenderId: "1081056972495",
  appId: "1:1081056972495:web:41d4f574d7e3093ee4b1ba",
  measurementId: "G-JCN9Q7K2JG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
