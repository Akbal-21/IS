import React, { useContext }  from 'react'
import { types } from '../../../types/types';
import { AuthContext } from '../../auth/AuthContext';



export const LogScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const hadleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: "Fer",
            },
        });
        history.replace("/");
    };

    return (
        <div>
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>LogginScreen</h1>
                <hr />
                <button className='btn btn-prime btn-block' onClick={hadleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}
