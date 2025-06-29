import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase config 
 const firebaseConfig = {
  apiKey: "AIzaSyBm-p2Pq9RUnmOsTfbS0Q09KR1Pghnxm38",
  authDomain: "skillup-1047f.firebaseapp.com",
  projectId: "skillup-1047f",
  storageBucket: "skillup-1047f.firebasestorage.app",
  messagingSenderId: "364824850685",
  appId: "1:364824850685:web:9c2d958d109934f72b4e94",
  measurementId: "G-BQ5CR4PGTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export default app
