// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// apiKey: "AIzaSyCycj868C9yXHH5HmMMGHtpZzWzyVA1Dqo",
//   authDomain: "assignment-twelve-dfcd6.firebaseapp.com",
//   projectId: "assignment-twelve-dfcd6",
//   storageBucket: "assignment-twelve-dfcd6.appspot.com",
//   messagingSenderId: "685519726953",
//   appId: "1:685519726953:web:d0d3fa6453c7b74df375f8"