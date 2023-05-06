
import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
    doc,
    getFirestore,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDoAE1c9nUtmeU5ATJS81S1_wrGXlDgGBE",
  authDomain: "pifs-25627.firebaseapp.com",
  projectId: "pifs-25627",
  storageBucket: "pifs-25627.appspot.com",
  messagingSenderId: "490963442232",
  appId: "1:490963442232:web:d45c16af41440009cf24cd"
};


// Bellow are mainly the authentications

const  GoogleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth();


GoogleProvider.setCustomParameters({
    prompt: "select_account"
})


export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider)
export const signInWithGooglePopups = () => signInWithPopup(auth, GoogleProvider);
export const createUserAurhWithEmailAndPAssword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email,password)
}



// Bellow are mainly the firestore
export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('error', error.message);
        }
    }else{
        console.log("user already exist");
    }
    return userDocRef
  }