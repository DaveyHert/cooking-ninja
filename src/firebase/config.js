import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGwvo7Qz8dXd_SGvG4GTsUzeDW2aM5wJw",
  authDomain: "cooking-ninja-site-a7b92.firebaseapp.com",
  projectId: "cooking-ninja-site-a7b92",
  storageBucket: "cooking-ninja-site-a7b92.appspot.com",
  messagingSenderId: "254491150943",
  appId: "1:254491150943:web:fe80ba8e52cd7bd85ea9ea",
};

// Initialize firebase with config object
firebase.initializeApp(firebaseConfig);

// Initialize firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
