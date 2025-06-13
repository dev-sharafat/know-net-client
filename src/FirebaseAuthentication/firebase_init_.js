// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpCi9F9ZgblNALsRuTeGeRnTPNbgoOIiY",
  authDomain: "knownet-47c86.firebaseapp.com",
  projectId: "knownet-47c86",
  storageBucket: "knownet-47c86.firebasestorage.app",
  messagingSenderId: "698963559212",
  appId: "1:698963559212:web:c45d53cd3f2632c3d5e289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);