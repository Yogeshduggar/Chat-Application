// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxaw6SiZUGY9IKYCJFsj5lbTNUmAghMKg",
  authDomain: "chat-3c3d2.firebaseapp.com",
  projectId: "chat-3c3d2",
  storageBucket: "chat-3c3d2.appspot.com",
  messagingSenderId: "471870160085",
  appId: "1:471870160085:web:fc0983df0497d37701b65c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();