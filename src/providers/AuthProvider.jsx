import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


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
        handleGithubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;