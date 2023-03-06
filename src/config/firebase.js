// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqK9L85yJZoBNrj3JHMyc7_dsHo0Y_rKQ",
  authDomain: "food-app-841d4.firebaseapp.com",
  databaseURL: "https://food-app-841d4-default-rtdb.firebaseio.com",
  projectId: "food-app-841d4",
  storageBucket: "food-app-841d4.appspot.com",
  messagingSenderId: "832844375175",
  appId: "1:832844375175:web:d02a17ab7b5c548d18c422",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
