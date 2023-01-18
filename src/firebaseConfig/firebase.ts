import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const firestore = getFirestore(FirebaseApp)
const auth = getAuth(FirebaseApp)

export { firestore, auth, provider }

