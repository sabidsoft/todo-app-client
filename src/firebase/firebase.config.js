// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTXJZOvpZIpni1Wg85gHFjJVIeM6wPQ70",
  authDomain: "todo-app-a7eab.firebaseapp.com",
  projectId: "todo-app-a7eab",
  storageBucket: "todo-app-a7eab.appspot.com",
  messagingSenderId: "957514586205",
  appId: "1:957514586205:web:c56cc893892b11628195b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;