import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../FirebaseConfig/FirebaseConfig";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
            setUser(loggedUser);
            setLoading(false);
            console.log('on auth state',loggedUser);
        })
        return(()=>{
            unsubscribe();
        })
    },[])


    const authInfo = {
        user,
        loading,
        googleSignIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;