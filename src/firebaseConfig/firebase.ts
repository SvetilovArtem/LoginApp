import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { User } from "../types/User";


const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const firestore = getFirestore(FirebaseApp)
const auth = getAuth(FirebaseApp)

const saveUserToFirebaseHandler = async ({ firstName, lastName, city, about, phone }:User) => {
    try {
        await addDoc(collection(firestore, "users"), {
            firstName: firstName,
            lastName: lastName,
            city: city,
            about: about,
            phone: phone
          })
    } catch (error) {
        console.error("Error adding document: ", error);
    }

}

export { firestore, auth, provider, FirebaseApp, saveUserToFirebaseHandler }

