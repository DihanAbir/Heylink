// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCnQs4iVBDP6mhKHdIcgnrDS7S0AxioPpk",
    authDomain: "showmoreinfo-ba216.firebaseapp.com",
    projectId: "showmoreinfo-ba216",
    storageBucket: "showmoreinfo-ba216.appspot.com",
    messagingSenderId: "500280047015",
    appId: "1:500280047015:web:430119b90a9df93c8b7282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;