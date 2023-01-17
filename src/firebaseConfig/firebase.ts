import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const FirebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(FirebaseApp)
const auth = getAuth(FirebaseApp)

export { firestore, auth }

