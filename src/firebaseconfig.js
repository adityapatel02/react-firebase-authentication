// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Uncomment if you need Firebase Authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzbHqRNsE3jL7n66NnB_on7qmI95_KjZc",
  authDomain: "react-firebase-auth-d0efe.firebaseapp.com",
  projectId: "react-firebase-auth-d0efe",
  storageBucket: "react-firebase-auth-d0efe.firebasestorage.app",
  messagingSenderId: "84262426568",
  appId: "1:84262426568:web:177b1f29325b3bcd30d2fd",
  measurementId: "G-3SMWH6T5R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth; // Export the auth object if you need to use Firebase Authentication in your app