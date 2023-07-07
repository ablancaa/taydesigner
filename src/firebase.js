// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwXi-CqhCmqY1SBqE41DTVMbdMSmWxaSg",
  authDomain: "taydesigner-4a0c1.firebaseapp.com",
  projectId: "taydesigner-4a0c1",
  storageBucket: "taydesigner-4a0c1.appspot.com",
  messagingSenderId: "662230348713",
  appId: "1:662230348713:web:e3714bcf2dac3e9e330ab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db}
