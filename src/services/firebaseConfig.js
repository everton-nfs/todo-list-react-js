import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtmkgS8B3eP-5eUfFc_Cq5VkZkJcRi7-E",
  authDomain: "react-auth-8274a.firebaseapp.com",
  projectId: "react-auth-8274a",
  storageBucket: "react-auth-8274a.appspot.com",
  messagingSenderId: "1014627654997",
  appId: "1:1014627654997:web:3a7006f8939fd3ffa2a3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);