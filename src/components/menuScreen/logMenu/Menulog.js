import Axios from "axios";
import React, { useEffect, useState, useContext, useReducer } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { AddToCart } from "./addCart";
import { AuthContext } from "../../auth/AuthContext";
import { CartReduce } from "../../../reducers/CartReducer";
import { types } from "joi";


export const Menulog = () => {
  const [proc, setproc] = useState([]);
  const {
    user: { idUsuario },
    dispatch
  } = useContext(AuthContext);
  const us = {idUsuario};
  useEffect(() => {
    Axios.get('http://localhost:9000/producto/')
      .then(res => {
        setproc(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  

  

  return (
    <div className="mt-3">
      <div className="container">
        <CardGroup>
          {proc.map((pro) => (
            <div className='p-2'>
              <Card  key={pro.idProducto} style={{ width: '18rem' }}
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
                  <button className='btn btn-green btn-block' onClick={()=>AddToCart(us.idUsuario,pro.idProducto)} >Agregar al carrito</button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};
