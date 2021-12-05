import React, { useEffect, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import { CartReduce } from '../../reducers/CartReducer';
import { types } from '../../types/types';

export const CarShop = () => {
    const [proc, setproc] = useState([]);

    const {
        user: { idUsuario },
        dispatch
    } = useContext(AuthContext);
    useEffect(() => {
        const us = {idUsuario};
        console.log(us.idUsuario);
        Axios.post('http://localhost:9000/cart/',{idUsuario: us.idUsuario})
          .then(res => {
            
            //const {productos, ar1, ar2} = res.data;
            console.log(res.data[0])
            setproc(res.data[0])
          })
          .catch(err => {
            console.log(err)
          })
      }, []);
    
    const eliminarProducto=(idProducto)=>{
      //console.log({state:idProducto});
      //console.log({action:types.REMOVE_ONE});
      CartReduce({state:{idProducto,idUsuario}},{type:types.REMOVE_ALL});
      //CartReduce({...idProducto,...idUsuario},types.REMOVE_ONE);
      
    };
    return (
        <div>
            <Table striped bordered hover variant="dark">
              
              <thead>

                <tr>
                  <th></th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {proc.map((pro)=>(
                <tr key = {pro.idProducto}>
                  <td><img src={pro.imgPath} style={{width: '33%'}}/></td>
                  <td>{pro.Nombre}</td>
                  
                  <td>{pro.cantidad}</td>
                  <td>${pro.precio}</td>
                  
                  <td>${pro.precio * pro.cantidad}</td>
                  <td><button onClick={() => eliminarProducto(pro.idProducto)}>X</button></td>
                </tr>
                
                ))}
                <button >Comprar</button>
                <button>Eliminar Carrito</button>
              </tbody>
            </Table>

            
        </div>
    )
}
