// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXkdRaK1Rp8FNEy1X_K7g_qxSfjDPJ1Ds",
  authDomain: "flutter-app-7dc41.firebaseapp.com",
  projectId: "flutter-app-7dc41",
  storageBucket: "flutter-app-7dc41.firebasestorage.app",
  messagingSenderId: "1004513750843",
  appId: "1:1004513750843:web:df7a5e54659367a867911e",
  measurementId: "G-01DWY8419R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
export default app;