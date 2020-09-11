import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRmpQc3dl8G9CJDEHmHmKz5-8h8CRh34o',
  authDomain: 'react-ecommerce-6945d.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-6945d.firebaseio.com',
  projectId: 'react-ecommerce-6945d',
  storageBucket: 'react-ecommerce-6945d.appspot.com',
  messagingSenderId: '524625409209',
  appId: '1:524625409209:web:a3bca616af4d9021445768'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// Sign in with popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Get user object (userAuth)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // If the user exists, query to Firestore the user's document (user data object)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    try {
      await userRef.set({
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: new Date(),
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
};

export default firebase;
