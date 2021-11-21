import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { types } from '../../../types/types';
import { AuthContext } from '../../auth/AuthContext';




export const LogScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [correolog, setcorreo] = useState("")
    const [pwslog, setpws] = useState("")

    const handleSubmit = () => {

        //validacion

        if (correolog === '' || pwslog === '') {
            alert('Todos loscampos tienen que ser llenados')
            return
        }
        Axios.post("http://localhost:9000/api/user1/", {
            psw: pwslog,
            correo: correolog,
        }).then((res) => {
            console.log(res)
            dispatch({
                type: types.login,
                payload: {
                    name: "Fernando",
                },
            });
            history.replace("/");
        })
    }

    return (
        <>
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>LogginScreen</h1>
                <hr />

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idCorreo">Correo</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setcorreo(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApPat">Contraseña</span>
                    <input type="password"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setpws(e.target.value);
                        }}
                    />
                </div>

                <button className='btn btn-prime btn-block' onClick={handleSubmit}>
                    Login
                </button>
            </div>
        </>
    )
}
