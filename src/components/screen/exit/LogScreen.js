import React, { useContext } from 'react'
import { types } from '../../../types/types';
import { AuthContext } from '../../auth/AuthContext';



export const LogScreen = ({ roll, setroll, history }) => {

    const { dispatch } = useContext(AuthContext);

    const hadleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: roll.Nombre,
            },
        });
        history.replace("/");
    };
    const handleChange = (e) => {
        setroll({
            ...roll,
            [e.target.name]: e.target.value
        })
    }

    const { correo, pws } = roll

    const handleSubmit = () => {

        //validacion

        if (correo === '' || pws === '') {
            alert('Todos loscampos tienen que ser llenados')
            return
        } else {
            //
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(roll),
            }

            fetch("http://localhost:9000/api/user1/", requestInit)
                .then(res => res.json())
                .then(res => console.log(res));

            setroll({
                correo: '',
                pws: ''
            });


            hadleLogin ();

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>LogginScreen</h1>
                <hr />

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idCorreo">Correo</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='correo' onChange={handleChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApPat">Contraseña</span>
                    <input type="password"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='pws' onChange={handleChange}
                    />
                </div>

                <button className='btn btn-prime btn-block' type='submit'>
                    Login
                </button>
            </div>
        </form>
    )
}
