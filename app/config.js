import { initializeApp } from "firebase/app";
import 'firebase/auth'

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBTSmpxIUzPjRnfIkqZ01FGZR_yIW41vw",
  authDomain: "firstapp-44578.firebaseapp.com",
  projectId: "firstapp-44578",
  storageBucket: "firstapp-44578.appspot.com",
  messagingSenderId: "855969771025",
  appId: "1:855969771025:web:cb83f4e8a8638ef9334bb0",
  measurementId: "G-B6L3K8L1DW"
};

const app = initializeApp(firebaseConfig);
export {app};