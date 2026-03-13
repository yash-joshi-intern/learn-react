import { createContext, useContext, useState } from "react";
import React from 'react'

const AuthContext = createContext();

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null)
    const [isAuthenticated , setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const login = (role) => {
        setIsLoading(true)
        setTimeout(()=> {
            setUser({name : "yash", role})
            setIsAuthenticated(true)
            setIsLoading(false)
        },500)
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value = {{user, isAuthenticated, isLoading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}