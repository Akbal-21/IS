import { types } from "../types/types";

export function CartReduce(state, action) {

    switch (action.type) {
        case types.Add_CART:
            return {
                
            };
        case types.REMOVE_ONE:
            return {

            };
        case types.REMOVE_ALL:
            return {

            };
        case types.CLEAR:
            return {

            };
        default:
            return state;
    }
}