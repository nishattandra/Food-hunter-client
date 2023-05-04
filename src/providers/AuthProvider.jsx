import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        handleGoogleSignIn,
        handleGithubSignIn,
        signIn,
        logOut,
        createUser,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;