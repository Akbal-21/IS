import React from 'react'

export const RegScreen = ({ user, setuser }) => {

    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const { Nombre, ApMat, ApPat, correo, pws } = user

    const handleSubmit = () => {

        //validacion

        if (Nombre === '' || ApMat === '' || ApPat === '' || correo === '' || pws === '') {
            alert('Todos loscampos tienen que ser llenados')
            return
        } else {
            //
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            }

            fetch("http://localhost:9000/api/user/", requestInit)
                .then(res => res.json())
                .then(res => console.log(res));


            setuser({
                Nombre: '',
                ApMat: '',
                ApPat: '',
                correo: '',
                pws: '',
                roll: 2,
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-5" style={{ textAlign: "center" }}>
                <h1>Registro</h1>
                <hr />


                <div className="input-group mb-3">
                    <span className="input-group-text" id="idNombre">Nombre</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='Nombre' onChange={handleChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApPat">App. Paterno</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='ApPat' onChange={handleChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idApMat">App. Materno</span>
                    <input type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='ApMat' onChange={handleChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idCorreo">Correo</span>
                    <input type="email"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='correo' onChange={handleChange}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="idContra">Contraseña</span>
                    <input type="password"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name='pws' onChange={handleChange}
                    />
                </div>

                <button type="submit" className='btn btn-prime btn-block'>
                    Register
                </button>
            </div>
        </form>
    )
}
