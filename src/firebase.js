import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import { getAuth, GoogleAuthProvider } from "firebase/auth";
=======
>>>>>>> 62272e4ff656959cdeefe0d5a62782d4f3ed681c

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
<<<<<<< HEAD
  appId: import.meta.env.VITE_APP_ID
=======
  appId: import.meta.env.VITE_APP_ID,
>>>>>>> 62272e4ff656959cdeefe0d5a62782d4f3ed681c
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
<<<<<<< HEAD
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { db, auth, googleProvider }
=======

export { db } 

>>>>>>> 62272e4ff656959cdeefe0d5a62782d4f3ed681c
