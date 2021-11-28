import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'


export const Busquedalog = () => {

    const [search, setsearch] = useState([])
    const [producto, setproducto] = useState("")

    //const [car, setcar] = useState([])


    const handleSubmit = async () => {
        Axios.post('http://localhost:9000/producto/search/',
            { search: producto }
        )
            .then(res => {
                setsearch(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleSubmit()
    }, [producto])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="container mt-5" style={{ textAlign: "center" }}>
                            <input type="text"
                                className="form-control"
                                placeholder="Choholate"
                                aria-label="choholate"
                                aria-describedby="button-addon2"
                                value={producto}
                                onChange={(e) => {
                                    setproducto(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="container mt-5" style={{ textAlign: "center" }}>
                            <div className="mt-3">
                                <div className="container">
                                    <CardGroup>
                                        {search.map((pro) => (
                                            <div className="p-2" key={pro.idProducto}>
                                                <Card style={{ width: '18rem' }}
                                                    bg="dark"
                                                    text="white"
                                                    className="mb-2"
                                                >
                                                    <Card.Img variant="top" src={pro.imgPath} />
                                                    <Card.Body>
                                                        <Card.Title>{pro.Nombre}</Card.Title>
                                                        <Card.Text>
                                                            {pro.descripcion}
                                                            <br />
                                                            Precio: ${pro.precio}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Body>
                                                        <button className='btn btn-green btn-block'>Agregar al carrito</button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </CardGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
