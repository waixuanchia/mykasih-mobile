import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8peDie7LEDY9O02u3ECA-Kt0db-1C0AA",
  authDomain: "mykasihapp.firebaseapp.com",
  projectId: "mykasihapp",
  storageBucket: "mykasihapp.appspot.com",
  messagingSenderId: "435309127489",
  appId: "1:435309127489:web:04b7ac1a0af156a1a4e3c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getStorage(app)