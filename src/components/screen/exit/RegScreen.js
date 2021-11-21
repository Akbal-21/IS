import Axios from 'axios'
import React, { useState } from 'react'

export const RegScreen = () => {



    const [NombreReg, setNombre] = useState("")
    const [ApMatReg, setApMAt] = useState("")
    const [ApPatReg, setApPat] = useState("")
    const [correoReg, setcorreo] = useState("")
    const [pswReg, setpws] = useState("")
    const [rollReg, setroll] = useState(2)

    const handleSubmit = () => {

        //validacion

        if (setNombre === '' || setApMAt === '' || setApPat === '' || setcorreo === '' || setpws === '') {
            alert('Todos loscampos tienen que ser llenados')
            return
        }
        Axios.post("http://localhost:9000/api/user/", {
            Nombre: NombreReg,
            ApMat: ApMatReg,
            ApPat: ApPatReg,
            psw: pswReg,
            correo: correoReg,
            roll: rollReg
        }).then((res) => {
            console.log(res)
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
