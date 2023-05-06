
import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDoAE1c9nUtmeU5ATJS81S1_wrGXlDgGBE",
  authDomain: "pifs-25627.firebaseapp.com",
  projectId: "pifs-25627",
  storageBucket: "pifs-25627.appspot.com",
  messagingSenderId: "490963442232",
  appId: "1:490963442232:web:d45c16af41440009cf24cd"
};

const  GoogleProvider = new GoogleAuthProvider();
const  GoogleProviderRedirect = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


GoogleProvider.setCustomParameters({
    prompt: "select_account"
})

GoogleProviderRedirect.setCustomParameters({
    "login_hint":"hernorch@gmail.com"
})
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProviderRedirect)
export const signInWithGooglePopups = () => signInWithPopup(auth, GoogleProvider);
export const createUserAurhWithEmailAndPAssword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email,password)
}
