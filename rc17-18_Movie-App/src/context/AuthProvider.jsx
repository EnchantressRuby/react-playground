import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useContext, useState } from 'react'
import { auth } from '../auth/firebase'
import { useNavigate } from 'react-router-dom'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'

export const AuthContext = createContext()

//*with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
    const navigate = useNavigate()

    const createUser = async (email, password) => {
        try {
            //? create new user firebase method
            let userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            navigate("/login")
            toastSuccessNotify("Registration successful.")

        } catch (error) {
            toastErrorNotify(error.message)
        }
    }

    //*https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/pass

    const signIn = async (email, password) => {
        try {
            //? user sign in firebase method
            let userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            navigate("/")
            toastSuccessNotify("Login successful.")

        } catch (error) {
            toastErrorNotify(error.message)
        }
    }

    const values = { currentUser, createUser, signIn  }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider