import Axios from "axios";
//import { useReducer } from "react";
import { CartReduce } from "../../../reducers/CartReducer";
import { types } from "../../../types/types";
import Swal from "sweetalert2";

export function AddToCart(idUs,idPro){
    
    Axios.post('http://localhost:9000/cart/count/',{idUsuario: idUs,idProducto: idPro })
        
        .then(res => {
            
            if(res.data.length == 0){
                
                CartReduce({state:{idPro,idUs}},{type: types.Add_CART});
                
            }else{
                const cantidad = res.data[0].cantidad +1;
                
                CartReduce({state:{idPro,idUs,cantidad}},{type: types.Add_Another_CART});
            }
            Swal.fire({
            
                icon: 'success',
                title: 'Producto agregado',
                showConfirmButton: false,
                timer: 1000
            })
            
          })
          .catch(err => {
            console.log(err)
          });
    
}
export function popFromCart(idUs,idPro){
    Axios.post('http://localhost:9000/cart/count/',{idUsuario: idUs,idProducto: idPro })
        
        .then(res => {
            
            if(res.data.length == 0){
                console.log("ningun item en el carro");
                
            }else{
                const cantidad = res.data[0].cantidad -1;
                const idUsuario = idUs;
                const idProducto = idPro;
                if(res.data[0].cantidad === 1){
                    CartReduce({state:{idProducto,idUsuario,cantidad}},{type: types.REMOVE_ALL});
                }else{
                    CartReduce({state:{idPro,idUs,cantidad}},{type: types.REMOVE_ONE});
                }
                
            }
            
          })
          .catch(err => {
            console.log(err)
          });
}