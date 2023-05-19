
import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

import {
    doc,
    getFirestore,
    getDoc,
    collection,
    writeBatch,
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


export const onAuthStateChangedListerner = (callback) => 
onAuthStateChanged(auth, callback);


// Bellow are mainly the authentications

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    });

    await batch.commit();
    console.log("done");
}

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

export const signInWithUserEmailAndPAssword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => {
    await signOut(auth);
    localStorage.clear()
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
    }
    return userDocRef
  }