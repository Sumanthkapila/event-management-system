import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "use-your-API-Key-Here",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
