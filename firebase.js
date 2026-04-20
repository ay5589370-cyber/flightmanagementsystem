import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsDuYZkAniS8WEiCVF6wY3_dP0vQH0McY",
  authDomain: "flight-management-system-220d4.firebaseapp.com",
  projectId: "flight-management-system-220d4",
  storageBucket: "flight-management-system-220d4.firebasestorage.app",
  messagingSenderId: "401239501439",
  appId: "1:401239501439:web:7dc5fa161419db62aced4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };