import React, { createContext, useState, useEffect } from "react"

const AuthContext = createContext({
    userContext: {},
    setUserContext: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [userContext, setUserContext] = useState(
        typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : "",
    )

    const context = {
        userContext,
        setUserContext,
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(userContext))
        return () => {
            localStorage.setItem("user", JSON.stringify(userContext))
        }
    }, [userContext])

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext
