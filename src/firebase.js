import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARaxDNFOn4TF4ga0lpgWe0V86BWWcS210",
  authDomain: "eventmanager-e5e27.firebaseapp.com",
  projectId: "eventmanager-e5e27",
  storageBucket: "eventmanager-e5e27.appspot.com",
  messagingSenderId: "751583692513",
  appId: "1:751583692513:web:584a81a20cbf2ef737d9a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
