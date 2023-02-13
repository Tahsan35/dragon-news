// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArNWoCGSFPlDqzvhA3kRI4IwGXbt9pmps",
    authDomain: "dragon-news-da07b.firebaseapp.com",
    projectId: "dragon-news-da07b",
    storageBucket: "dragon-news-da07b.appspot.com",
    messagingSenderId: "719025700420",
    appId: "1:719025700420:web:e2033c3513a9843ec60611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;