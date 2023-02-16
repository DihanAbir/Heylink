import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHNCoUTx7gkt6qFI6AD__XX6Y-pUvmxpw",
    authDomain: "heylink-d6364.firebaseapp.com",
    projectId: "heylink-d6364",
    storageBucket: "heylink-d6364.appspot.com",
    messagingSenderId: "237623702888",
    appId: "1:237623702888:web:9fd4a553785ded81f712dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;