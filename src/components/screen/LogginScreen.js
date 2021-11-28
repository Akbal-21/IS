import { types } from '../../types/types';
import React, { useContext, useState } from "react";
import Axios from 'axios';
import { RegScreen } from "./exit/RegScreen";
import { AuthContext } from '../auth/AuthContext';
import Swal from "sweetalert2";
import { FormControl, InputGroup } from 'react-bootstrap';

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
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="container mt-5" style={{ textAlign: "center" }}>
            <h1>LogginScreen</h1>
            <hr />

            <InputGroup className="mb-3">
              <InputGroup.Text id="idCorreo">Correo</InputGroup.Text>
              <FormControl
                aria-label="correo"
                aria-describedby="ingresa correo"
                onChange={(e) => {
                  setcorreo(e.target.value);
                }}
              />
            </InputGroup>


            <InputGroup className="mb-3">
              <InputGroup.Text id="idContraseña">Contraseña</InputGroup.Text>
              <FormControl
                aria-label="Contraseña"
                aria-describedby="ingresa Contraseña"
                type='password'
                onChange={(e) => {
                  setpws(e.target.value);
                }}
              />
            </InputGroup>

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