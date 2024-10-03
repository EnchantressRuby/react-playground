import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
} from "../helper/ToastNotify";

export const AuthContext = createContext();

//* with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        userObserver();
    }, []);

    const createUser = async (email, password, displayName) => {
        try {
            //? create new user firebase method
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(auth.currentUser, {
                displayName,
                // displayName: displayName
            });
            navigate("/");
            toastSuccessNotify("Registered successfully");
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };

    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/password
    const signIn = async (email, password) => {
        try {
            //? user log-in firebase method
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            navigate("/");
            toastSuccessNotify("Login successful.");
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                toastSuccessNotify("Sign-out successful.");
            })
            .catch((error) => {
                // An error happened.
                toastErrorNotify(error.message);
            });
    };

    const userObserver = () => {
        //? checks the user successfully log-in or no
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, photoURL } = user;
                setCurrentUser({ email, displayName, photoURL });
            } else {
                // User is signed out
                setCurrentUser(false);
            }
        });
    };

    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Google

    //* => Authentication => settings => Authorized domains => add domain
    //! to run google sign-in add deploy link to domain list after deploy the project

    const googleProvider = () => {
        //? log-in with Google firebase method
        const provider = new GoogleAuthProvider();
        //? pop-up log-in method
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                navigate("/");
                toastSuccessNotify("Login successful.");
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error);
                toastErrorNotify(error.message);
            });
    };

    const forgotPassword = (email) => {
        //? forgot password by email, firebase method
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                toastWarnNotify("Please check your mail box!");
            })
            .catch((error) => {
                toastErrorNotify(error.message);
            });
    };

    console.log(currentUser);
    const values = {
        currentUser,
        createUser,
        signIn,
        logOut,
        googleProvider,
        forgotPassword,
    };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
