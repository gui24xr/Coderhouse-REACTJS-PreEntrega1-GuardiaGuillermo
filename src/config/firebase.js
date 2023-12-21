// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAglupgqMfkvyqOSmS5qEWdZY-CC8VHbeo",
  authDomain: "insidehelmet-b45fb.firebaseapp.com",
  projectId: "insidehelmet-b45fb",
  storageBucket: "insidehelmet-b45fb.appspot.com",
  messagingSenderId: "677010684143",
  appId: "1:677010684143:web:e54eecd048d0ef6aaa431a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)