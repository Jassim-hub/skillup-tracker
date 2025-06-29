import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

// 1. Create the context (like creating a radio station)
const AuthContext = createContext();

// 2. Custom hook to use the context (like a radio receiver)
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// 3. Provider component (like the radio transmitter)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Current logged-in user
  const [userProfile, setUserProfile] = useState(null); // User profile with username
  const [loading, setLoading] = useState(true); // Loading state

  // Sign up function
  const signup = async (email, password, username) => {
    // eslint-disable-next-line no-useless-catch
    try {
      // Create user with Firebase Auth
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Try to save user profile to Firestore
      try {
        await setDoc(doc(db, "users", result.user.uid), {
          username: username,
          email: email,
          createdAt: new Date(),
        });
        console.log("User profile saved to Firestore");
      } catch (firestoreError) {
        console.warn(
          "Firestore not enabled, skipping profile save:",
          firestoreError.message
        );
        // Continue without Firestore - user can still use the app
      }

      return result;
    } catch (error) {
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  // Function to fetch user profile from Firestore
  const fetchUserProfile = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data();
      }
      return null;
    } catch (error) {
      console.warn(
        "Firestore not available, using email fallback:",
        error.message
      );
      return null; // Fallback gracefully
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user); // Set user when logged in, null when logged out

      if (user) {
        // Fetch user profile from Firestore
        const profile = await fetchUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }

      setLoading(false); // Stop loading
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // What we're sharing with the entire app
  const value = {
    user, // Current user info
    userProfile, // User profile with username
    signup, // Sign up function
    login, // Login function
    logout, // Logout function
    loading, // Loading state
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only show app when not loading */}
    </AuthContext.Provider>
  );
}
