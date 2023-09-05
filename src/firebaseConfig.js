import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBrsRERAj5z3UYJvv9B2sZx7MrtU3dsrq8",
  authDomain: "testing-storage-50300.firebaseapp.com",
  projectId: "testing-storage-50300",
  storageBucket: "testing-storage-50300.appspot.com",
  messagingSenderId: "660288228346",
  appId: "1:660288228346:web:8c738a94529012872af243",

});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
