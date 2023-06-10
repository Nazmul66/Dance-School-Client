import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../FIrebase/FIrebase";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    // create user
    const createUsers = (email, password) =>{
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

                // get and set token
                if(changeState){
                    axios.post("http://localhost:5000/jwt", {email: changeState.email})
                    .then(data => {
                        console.log(data.data.token)
                        localStorage.setItem("access-token", data.data.token)
                    })
                }
                else{
                    localStorage.removeItem("access-token")
                }

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
        createUsers,
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