import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW2ICVpVQ6hs2PY3ByPGaX2yw2Pdgq0dc",
    authDomain: "ecommerce-astigueta.firebaseapp.com",
    projectId: "ecommerce-astigueta",
    storageBucket: "ecommerce-astigueta.appspot.com",
    messagingSenderId: "678666766322",
    appId: "1:678666766322:web:f4258ed9d9b02fbaf60d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);