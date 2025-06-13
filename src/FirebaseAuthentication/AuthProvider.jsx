import React from "react";
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase_init_";
const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const signIn = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleprovider)
    }

    const signOut = ()=>{
        return signOut(auth)
    }

    
    const userinfo = {
        signIn,
        googleSignIn,
        signOut,
    }
  return <AuthContext value = {userinfo}>{children}</AuthContext>
};

export default AuthProvider;
