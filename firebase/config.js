import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjj4i75cuEWlsrmqSKYv4r0HsYwYwGYrA",
  authDomain: "stickerbd1.firebaseapp.com",
  projectId: "stickerbd1",
  storageBucket: "stickerbd1.appspot.com",
  messagingSenderId: "630772291538",
  appId: "1:630772291538:web:907891d597d3ea09c59a0b",
  measurementId: "G-4VMQEGSB5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
