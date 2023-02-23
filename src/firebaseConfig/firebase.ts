import { AppDispatch } from './../redux/store';
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { User } from "../types/User";
import { setIsAuth } from '../redux/userSlice';
import { NavigateFunction } from 'react-router';

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

const signOutHandler = (dispatch:AppDispatch, navigate: NavigateFunction) => { 
    
    signOut(auth).then(
        () => {
            dispatch(setIsAuth(false))
            navigate('/') 
            console.log('sign out is success')
        }
    ).catch(error => console.log(error))
}


const getUsers = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const docData = querySnapshot.docs

    console.log(docData[0])
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data);
    // });
}

export { firestore, auth, provider, FirebaseApp, saveUserToFirebaseHandler, signOutHandler, getUsers }

