import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8b_1NB0a0c8ynuX9DUYviPq4Px-UxLTc",
  authDomain: "registration-3b23b.firebaseapp.com",
  projectId: "registration-3b23b",
  storageBucket: "registration-3b23b.appspot.com",
  messagingSenderId: "879641911890",
  appId: "1:879641911890:web:e3854c518430667ed3358b",
  measurementId: "G-SR4TGR1M8L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);