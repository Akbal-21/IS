import React,{useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { Link } from 'react-router-dom'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin =() =>{

        const lastPath = localStorage.getItem('lastPath'|| '/');

        //history.push('/');
        //history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Fernando'
            }
        });
        history.replace(lastPath);

    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form >
                <input 
                    type="text"
                    placeholder="email address"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="Password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-prime btn-block"
                >
                    Login
                </button>
                
                <div className="auth__social-networks">
                    <p>social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register">
                    Registrer
                </Link>
            </form>
        </>
    )
}
