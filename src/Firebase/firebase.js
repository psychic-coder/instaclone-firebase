import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "insta-clonefirebase-6c37b.firebaseapp.com",
  projectId: "insta-clonefirebase-6c37b",
  storageBucket: "insta-clonefirebase-6c37b.appspot.com",
  messagingSenderId: "911614618405",
  appId: "1:911614618405:web:33e5cdbbb7988858a608cc",
  measurementId: "G-JSYRF809NW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
