import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOX6ruYUOkDMZmgcUMKu-2C0XyyET_R6Q",
  authDomain: "reactchat-f6d4e.firebaseapp.com",
  projectId: "reactchat-f6d4e",
  storageBucket: "reactchat-f6d4e.appspot.com",
  messagingSenderId: "931763999102",
  appId: "1:931763999102:web:aa6e9f6d024d40cb8f232f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
