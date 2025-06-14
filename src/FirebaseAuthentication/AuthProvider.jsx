import React, { useEffect, useState } from "react";
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase_init_";
const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    console.log(user);
      const [loading , setLoading] = useState(true)
    const signIn = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleprovider)
    }

    const handleSignOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const userinfo = {
        user,
        loading,
        setUser,
        setLoading,
        signIn,
        googleSignIn,
        handleSignOut,
    }
  return <AuthContext value = {userinfo}>{children}</AuthContext>
};

export default AuthProvider;
