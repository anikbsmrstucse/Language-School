import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from 'react';
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