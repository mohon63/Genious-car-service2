// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2XX1__twd0hV6ZYzjFpf0EPu5to6zSXs",
    authDomain: "genius-car-services2-8369d.firebaseapp.com",
    projectId: "genius-car-services2-8369d",
    storageBucket: "genius-car-services2-8369d.appspot.com",
    messagingSenderId: "751326598396",
    appId: "1:751326598396:web:b30bf8ff8ea6a88e5ff379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;