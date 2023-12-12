import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBhlEUpmmQJh85yb037s1Vs_mxDFp5S0Q",
  authDomain: "project-group7-4c89a.firebaseapp.com",
  projectId: "project-group7-4c89a",
  storageBucket: "project-group7-4c89a.appspot.com",
  messagingSenderId: "175515367523",
  appId: "1:175515367523:web:4e372d051e2fbe2d172056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);