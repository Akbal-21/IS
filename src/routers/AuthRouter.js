import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LoginScreen } from '../components/authscreen/LoginScreen'
import { RegisterDes } from '../components/authscreen/RegisterDes'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
        <div className="auth__box-container">
            <Switch>
                <Route 
                    exact 
                    path="/auth/login" 
                    component={LoginScreen}
                />
                <Route 
                    exact 
                    path="/auth/register" 
                    component={RegisterDes}
                />
                <Redirect to="/auth/login"/>
            </Switch>
        </div>
            
        </div>
    )
}
