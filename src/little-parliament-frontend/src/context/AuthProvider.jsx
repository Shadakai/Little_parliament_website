import React from 'react'

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
   // Global context that allows a Carly to login as admin
    const [auth, setAuth] = React.useState({})

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;