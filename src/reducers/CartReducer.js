import { types } from "../types/types";
import Axios from 'axios';


export function CartReduce(state, action) {
   
    switch (action.type) {
        case types.Add_CART:
            
            return {
                
            };
            break;
        case types.REMOVE_ONE:
            

            return {
                
            };
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
            return {

            };
            break;
        default:
            return state;
            break;
            
    }
}