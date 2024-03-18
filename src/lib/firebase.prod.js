// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// import { seedDatabase } from "../seed";  주석처리 안하면 db에 계속해서 데이터가 쌓임
// import Firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsz7IJ3zCTkVSnVhPxc5Xh8qFgFNJ9KDc",
  authDomain: "react-test-3fb17.firebaseapp.com",
  projectId: "react-test-3fb17",
  storageBucket: "react-test-3fb17.appspot.com",
  messagingSenderId: "825307542729",
  appId: "1:825307542729:web:b3fc7368852ac8b5348918",
  measurementId: "G-6VBZBVGRNJ"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig); 
const auth = getAuth(); // 계정 관리에 이용

// seedDatabase(firebase); 주석처리 안하면 db에 계속해서 데이터가 쌓임


export { firebase, auth };
