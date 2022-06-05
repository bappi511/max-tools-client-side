// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdxO80MrfRBNcRQDHXQT2pI_wuoEBbiIA",
    authDomain: "max-tools-9198f.firebaseapp.com",
    projectId: "max-tools-9198f",
    storageBucket: "max-tools-9198f.appspot.com",
    messagingSenderId: "652363710162",
    appId: "1:652363710162:web:7315142cc3dedb7314f70b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;