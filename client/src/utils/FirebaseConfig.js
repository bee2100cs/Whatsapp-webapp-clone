// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApDFGJELhNACp4TWIh2UvaRlq1PvwvZIA",
    authDomain: "whatsapp-clone-2100.firebaseapp.com",
    projectId: "whatsapp-clone-2100",
    storageBucket: "whatsapp-clone-2100.appspot.com",
    messagingSenderId: "1094767590183",
    appId: "1:1094767590183:web:800acf34989b86a70a8702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);