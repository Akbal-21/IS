import { types } from '../../types/types';
import React, { useContext, useState } from "react";
import Axios from 'axios';
import { RegScreen } from "./exit/RegScreen";
import { AuthContext } from '../auth/AuthContext';
import Swal from "sweetalert2";

export const LogginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext);

  const [correolog, setcorreo] = useState("")
  const [pwslog, setpws] = useState("")

  const handleSubmit = async () => {

    //validacion

    if (correolog === '' || pwslog === '') {
      Swal.fire('Info', 'Todos loscampos deben de serllenados', 'info')
      return
    }
    Axios.post('http://localhost:9000/usuario/user1/', {
      correo: correolog,
      pws: pwslog
    })
      .then(res => {
        console.log(res.data[0])
        dispatch({
          type: types.login,
          payload: {
            name: res.data[0].Nombre,
            roll: res.data[0].roll
          },
        });
        history.replace("/");
      })
      .catch(err => {
        Swal.fire('Error', 'Usuario o contraseña incorrecto', 'error')
        console.log(err)
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
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
        </div>
        <div className="col-6">
          <RegScreen />
        </div>
      </div>
    </div>
  );
};