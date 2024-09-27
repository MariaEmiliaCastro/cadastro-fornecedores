import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cadastro-fornecedores-5cbd9.firebaseapp.com",
  projectId: "cadastro-fornecedores-5cbd9",
  storageBucket: "cadastro-fornecedores-5cbd9.appspot.com",
  messagingSenderId: "767740109995",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-JBD5GZMDMP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
