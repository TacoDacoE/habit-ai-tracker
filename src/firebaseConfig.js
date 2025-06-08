import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgh81jwGaTh1JtxCeUMuyVJU1m7OcDxg8",
    authDomain: "ai-habit-tracker-9ab7b.firebaseapp.com",
    projectId: "ai-habit-tracker-9ab7b",
    storageBucket: "ai-habit-tracker-9ab7b.firebasestorage.app",
    messagingSenderId: "660374819090",
    appId: "1:660374819090:web:73345b063c0a74ef37e3cb",
    measurementId: "G-WV12C9LHDQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
