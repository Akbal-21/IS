import React, { useContext } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { types } from "../../types/types";
import { AuthContext } from "../auth/AuthContext";

export const LogginScreen = ({ history }) => {
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
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="container mt-5" style={{ textAlign: "center" }}>
            <h1>LogginScreen</h1>
            <hr />
            <Button variant="primary" onClick={hadleLogin}>
              Login
            </Button>
          </div>
        </div>
        <div className="col-6">
          <div className="container mt-5" style={{ textAlign: "center" }}>
            <h1>Registro</h1>
            <hr />
            <InputGroup className="mb-3">
              <InputGroup.Text>Nombre</InputGroup.Text>
              <FormControl aria-label="nombre" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Apellido paterno</InputGroup.Text>
              <FormControl aria-label="ApPat" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Apellido materno</InputGroup.Text>
              <FormControl aria-label="ApMat" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Correo</InputGroup.Text>
              <FormControl aria-label="correo" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Contraseña</InputGroup.Text>
              <FormControl aria-label="password" />
            </InputGroup>
            
            <InputGroup className="mb-3">
              <InputGroup.Text>Repetir contraseña</InputGroup.Text>
              <FormControl aria-label="password2" />
            </InputGroup>

            <Button variant="primary">
                Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
