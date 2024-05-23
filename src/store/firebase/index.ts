
import { initializeApp } from "firebase/app";
import { doc, getDoc ,collection, setDoc,query, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_OmypKfJ1hk51TuuISGCkcgeDQTlnzLs",
    authDomain: "besproject-e9b29.firebaseapp.com",
    projectId: "besproject-e9b29",
    storageBucket: "besproject-e9b29.appspot.com",
    messagingSenderId: "517930975671",
    appId: "1:517930975671:web:e507e8d78767598d806832"
};

const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export const users = collection(db, "users");
const docRef = doc(db, "users", "otherUser");
export const docSnap = await getDoc(docRef);



