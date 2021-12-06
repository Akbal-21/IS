import React, { useEffect, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import { CartReduce } from '../../reducers/CartReducer';
import { types } from '../../types/types';
import { AddToCart, popFromCart } from '../menuScreen/logMenu/addCart';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";


export const CarShop = () => {
    const [proc, setproc] = useState([]);

    const [acumulado, setstate] = useState(0)
    let history = useHistory();

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

          
          
          const ac = res.data[0].reduce((prev, next) => prev + (next.precio * next.cantidad), 0);
          setstate(ac)
          console.log(ac)
          
          /*for(const p in res.data[0]) {
            let precio=res.data[0][p].precio
            let cantidad=res.data[0][p].cantidad
            setstate(...acumulado + ( precio * cantidad ))
            console.log(acumulado)
          }*/
        })
        .catch(err => {
          console.log(err)
        })
        console.log(proc)




      }, []);
    
    const eliminarProducto=(idProducto)=>{
      
      CartReduce({state:{idProducto,idUsuario}},{type:types.REMOVE_ALL});
      let newItem =  proc.find(proc=>proc.idProducto === idProducto);
      console.log(newItem);
    };

    const eliminarCarrito=()=>{
      CartReduce({state:{idUsuario}},{type:types.CLEAR});
    }
    const comprarCarrito=()=>{
      
      Swal.fire({
        title: '¿Finalizar compra?',
        text: "Pagaras $"+acumulado,
        icon: 'pesos mexicanos.',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Confirmar!',
        cancelButtonText: '¡Cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          Swal.fire({
            
            icon: 'success',
            title: 'Has pagado $'+acumulado+" pesos mexicanos.",
            showConfirmButton: false,
            timer: 2000
          })

          history.push("/menu");
        
          CartReduce({state:{idUsuario}},{type:types.CLEAR});


        }
      })
      
    }

    
    
    return (
        <div>
            <Table responsive striped bordered hover variant="dark">
              
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
              <tbody className="cart_img">
              {proc.map((pro)=>(
                <tr key = {pro.idProducto}>
                  
                    
                  <td className="cart_cell">
                    <div >            
                      <img src={pro.imgPath}  className="cart_img"/>
                    </div>
                  
                  </td>
                  <td>{pro.Nombre}</td>
                  
                  <td>
                    <div align="center">
                      <button className="btn_cant_cart" onClick={()=>popFromCart(
                      idUsuario,
                      pro.idProducto
                    )}>-</button>  {pro.cantidad}  <button className="btn_cant_cart" onClick={()=>AddToCart(
                      idUsuario,
                      pro.idProducto
                    )}>+</button>
                    </div>
                  </td>
                  <td>${pro.precio}</td>
                  
                  <td>${pro.precio * pro.cantidad}</td>
                  <td><button className="btn_elim_cart" onClick={() => eliminarProducto(pro.idProducto)}>X</button></td>
                </tr>
                
                ))}
                
                <tr>
                  <td colspan="4">Total a pagar:</td>

                  <td colspan="2">${acumulado} Pesos</td>
                </tr>
                <tr>
                  <td colspan="6" align="center">
                    <div className="row">
                      <div className="col-6">
                        <button className="btn_cart" btn_cant_cartonClick={() => eliminarCarrito()}>Eliminar Carrito</button>
                      </div>
                      <div  className="col-6">
                        <button className="btn_cart" onClick={() => comprarCarrito()}>Comprar</button>
                      </div>
                                
                    </div>
                  </td>
                </tr>

              </tbody>
            </Table>
            
            

            
        </div>
    )
}
