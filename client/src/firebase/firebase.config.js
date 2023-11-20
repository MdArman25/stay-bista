// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM4E2zXpWEfhYEHqzSYBWUo0GaNVsIEBQ",
  authDomain: "stay-vista-ac2e7.firebaseapp.com",
  projectId: "stay-vista-ac2e7",
  storageBucket: "stay-vista-ac2e7.appspot.com",
  messagingSenderId: "641099027232",
  appId: "1:641099027232:web:784b895eb53cd2e2d17d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app