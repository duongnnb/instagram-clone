import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed
// seedDatabase(firebase);
// console.log('firebase init successfully', firebase);

export { firebase, FieldValue };
