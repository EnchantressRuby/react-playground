import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

//*with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)

    const createUser = async () => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {

        }
    }

    const values = { currentUser }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider