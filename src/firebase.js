import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZSbRuOvetcIpxGMe7CnfnprEqwB-YGCc",
	authDomain: "mapas-f0dfa.firebaseapp.com",
	projectId: "mapas-f0dfa",
	storageBucket: "mapas-f0dfa.appspot.com",
	messagingSenderId: "210815926887",
	appId: "1:210815926887:web:d7b3d5a31b2958f2660ac2",
	measurementId: "G-2N17R7NP3S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const firestore = firebase.firestore();

export default firestore;

