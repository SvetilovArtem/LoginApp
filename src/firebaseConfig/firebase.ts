import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const FirebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(FirebaseApp)
export const auth = getAuth(FirebaseApp)

