import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer'
import { AppRouter } from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

export const ISWAPP = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter/>
        </AuthContext.Provider>
            
    )
}
