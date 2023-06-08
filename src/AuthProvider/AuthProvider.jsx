import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../FIrebase/FIrebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    // create user
    const createUSers = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // signInUser
     const signInLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
     }

     // onAuthChangeState system
        useEffect(() =>{
            const unSubScribe = onAuthStateChanged(auth, changeState =>{
                setUser(changeState)
                setLoading(false);
        })
        return () =>{
            return unSubScribe();
        }
     },[])

     // signOut
     const signOutUser = () =>{
        return signOut(auth);
     }

     // googleSignIn
     const googleSignIn = () =>{
        return signInWithPopup(auth, GoogleProvider)
     }

    const authInfo = {
        createUSers,
        signInLogin,
        user,
        loading,
        signOutUser,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;