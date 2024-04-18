import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCiiVj09c3wB-78PuI_ARc3KMGWB-rt1pA",
    authDomain: "fb-auth-parcial2.firebaseapp.com",
    projectId: "fb-auth-parcial2",
    storageBucket: "fb-auth-parcial2.appspot.com",
    messagingSenderId: "419687538229",
    appId: "1:419687538229:web:6aae3270412eaaf3b59b7c"
};

const app = initializeApp(firebaseConfig);
export {app};