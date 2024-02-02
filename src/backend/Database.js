// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrayO5oGq4ZNEaHmh3O882lMEXs6sfRvA",
  authDomain: "cvmaker-46f25.firebaseapp.com",
  databaseURL: "https://cvmaker-46f25-default-rtdb.firebaseio.com",
  projectId: "cvmaker-46f25",
  storageBucket: "cvmaker-46f25.appspot.com",
  messagingSenderId: "964594602899",
  appId: "1:964594602899:web:a4eb656907f3fbcf56ce66",
  measurementId: "G-C383ZK4D0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const FireData=getDatabase(app);
export default  FireData;