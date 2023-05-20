import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwGYWjlZdPG63a4sQELY0Qi3zvRVtRm8",
  authDomain: "artgennie-87cb0.firebaseapp.com",
  projectId: "artgennie-87cb0",
  storageBucket: "artgennie-87cb0.appspot.com",
  messagingSenderId: "361617182611",
  appId: "1:361617182611:web:fe6cd861bd8656a418a266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);