import Axios from 'axios'
import React, { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';
import Swal from "sweetalert2";
import validator from 'validator'

export const RegScreen = () => {



    const [NombreReg, setNombre] = useState("")
    const [ApMatReg, setApMAt] = useState("")
    const [ApPatReg, setApPat] = useState("")
    const [correoReg, setcorreo] = useState("")
    const [pswReg, setpws] = useState("")
    const [rollReg] = useState(2)

    const handleSubmit = () => {

        //validacion

        if (NombreReg.length < 4 || ApMatReg.length < 4 || ApPatReg.length < 4 || pswReg.length < 8) {
            Swal.fire('Info', 'Todos loscampos deben tener mas de 5 letras', 'info')
            return
        } else if (!validator.isEmail(correoReg)) {
            Swal.fire('Info', 'El correo tiene un formato invalido', 'info')
            return
        }
        Axios.post("http://localhost:9000/usuario/", {
            Nombre: NombreReg,
            ApMat: ApMatReg,
            ApPat: ApPatReg,
            psw: pswReg,
            correo: correoReg,
            roll: rollReg
        })
            .then((res) => {
                Swal.fire('Exito', 'Registroexistoso', 'success')
            })
            .catch(err => {
                Swal.fire('Error', 'Usuario existente o datos incorrectos', 'error')
            })
    }

    return (
        < >
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>Registro</h1>
                <hr />


                <InputGroup className="mb-3">
                    <InputGroup.Text id="idNombre">Nombre</InputGroup.Text>
                    <FormControl
                        aria-label="nombre"
                        aria-describedby="ingresa Nombre"
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="idApPat">App. Paterno</InputGroup.Text>
                    <FormControl
                        aria-label="ApPat"
                        aria-describedby="ingresa ApPat"
                        onChange={(e) => {
                            setApPat(e.target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="idApMat">App. Materno</InputGroup.Text>
                    <FormControl
                        aria-label="ApMat"
                        aria-describedby="ingresa ApMat"
                        onChange={(e) => {
                            setApMAt(e.target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="idCorreo">Correo</InputGroup.Text>
                    <FormControl
                        aria-label="Correo"
                        aria-describedby="ingresa Correo"
                        type="email"
                        onChange={(e) => {
                            setcorreo(e.target.value);
                        }}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="idContra">Contraseña</InputGroup.Text>
                    <FormControl
                        aria-label="contraseña"
                        aria-describedby="ingresa contraseña"
                        type="password"
                        onChange={(e) => {
                            setpws(e.target.value);
                        }}
                    />
                </InputGroup>

                <button onClick={handleSubmit} className='btn btn-prime btn-block'>
                    Register
                </button>
            </div>
        </>
    )
}
