import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqmnovwoJmXdliuB5RexpGV-Cf173yugM",
  authDomain: "cadastro-fornecedores-5cbd9.firebaseapp.com",
  projectId: "cadastro-fornecedores-5cbd9",
  storageBucket: "cadastro-fornecedores-5cbd9.appspot.com",
  messagingSenderId: "767740109995",
  appId: "1:767740109995:web:1f3b62d39af950beed83ee",
  measurementId: "G-JBD5GZMDMP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
