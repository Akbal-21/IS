import Axios from 'axios'
import React, { useState } from 'react'
import Swal from "sweetalert2";
import validator from 'validator'

export const RegScreen = () => {



    const [NombreReg, setNombre] = useState("")
    const [ApMatReg, setApMAt] = useState("")
    const [ApPatReg, setApPat] = useState("")
    const [correoReg, setcorreo] = useState("")
    const [pswReg, setpws] = useState("")
    const [rollReg, setroll] = useState(2)

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
                console.log(res)
            })
            .catch(err => {
                Swal.fire('Error', 'Usuario existente o datos incorrectos', 'error')
                console.log(err)
            })
    }

    return (
        < >
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>Registro</h1>
                <hr />


                <div className="input-group mb-3">
                    <span className="input-group-text" id="idNombre">Nombre</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApPat">App. Paterno</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setApMAt(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApMat">App. Materno</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setApPat(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idCorreo">Correo</span>
                    <input type="email"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setcorreo(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idContra">Contraseña</span>
                    <input type="password"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => {
                            setpws(e.target.value);
                        }}
                    />
                </div>

                <button onClick={handleSubmit} className='btn btn-prime btn-block'>
                    Register
                </button>
            </div>
        </>
    )
}
