import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLuc3DqlGMDiEs9khLoppFoXwLdz19JeI",
    authDomain: "projectsprint-9a809.firebaseapp.com",
    projectId: "projectsprint-9a809",
    storageBucket: "projectsprint-9a809.appspot.com",
    messagingSenderId: "549965994084",
    appId: "1:549965994084:web:d59219f6efef3ccf3c2771"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export {
    app,
    db,
    google,
    facebook
}