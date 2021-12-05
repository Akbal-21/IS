import { types } from "../types/types";
import Axios from 'axios';
import { Alert } from "react-bootstrap";


export function CartReduce(state, action) {
   
    switch (action.type) {
        case types.Add_CART:
            const Addst = state.state;
            console.log(Addst);
            Axios.post('http://localhost:9000/cart/carroAdd/',{idUsuario: Addst.idUs, idProducto: Addst.idPro, cantidad: 1})
            .then(res =>{
                console.log(res)
                return (
                    <Alert>
                        {res}
                    </Alert>
                );
            }).catch(err=>{
                return(
                    <Alert>
                        {err}
                    </Alert>
                );
            });
            
            break;
        case types.Add_Another_CART:
            const Addstp = state.state;
            Axios.post('http://localhost:9000/cart/carroAddAnother/',{idUsuario: Addstp.idUs, idProducto: Addstp.idPro, cantidad: Addstp.cantidad})
            .then(res =>{
                console.log(res)
                return (
                    <Alert>
                        {res}
                    </Alert>
                );
            }).catch(err=>{
                return(
                    <Alert>
                        {err}
                    </Alert>
                );
            });
            break;
        case types.REMOVE_ONE:
            const popST = state.state;
            Axios.post('http://localhost:9000/cart/carroAddAnother/',{idUsuario: popST.idUs, idProducto: popST.idPro, cantidad: popST.cantidad})
            .then(res =>{
                console.log("Unidad eliminada del carrito")
                return (
                    <Alert>
                        {res}
                    </Alert>
                );
            }).catch(err=>{
                return(
                    <Alert>
                        {err}
                    </Alert>
                );
            });
            break;

            
            break;
        case types.REMOVE_ALL:
            const st = state.state;
            
            Axios.post('http://localhost:9000/cart/carroDeleteProd/',{idUsuario: st.idUsuario,idProducto: st.idProducto})
                .then(res => {
                    console.log(res);
                }).catch(err =>{
                    console.log(err);
                });
            
            return {

            };
            break;
        case types.CLEAR:
            Axios.post('http://localhost:9000/cart/carroLimpiar/',{idUsuario: state.state.idUsuario})
            .then(res=>{
                console.log(res);
            }).catch(err =>{
                console.log(err);
            });
            return {

            };
            break;
        default:
            return state;
            break;
            
    }
}