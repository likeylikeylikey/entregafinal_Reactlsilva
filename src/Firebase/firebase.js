import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYBzw2hdx000fFg80nmd1Ep8kF2QkeuLQ",
    authDomain: "proyecto-react-93420.firebaseapp.com",
    projectId: "proyecto-react-93420",
    storageBucket: "proyecto-react-93420.appspot.com",
    messagingSenderId: "390445215349",
    appId: "1:390445215349:web:e79315f10f3ca65565923c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)