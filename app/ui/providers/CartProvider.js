import React, {createContext, useReducer} from "react";

import { initialState, CartReducer } from "../../data/reducers/CartReducer";
//import { initialState, cartReducer } from "../../app/data/reducers/CartReducer";

export const CartContext = createContext(initialState);

export default function CartProvider(props){

    const [cartState, cartDispath] = useReducer(CartReducer, initialState)
    return(

        <CartContext.Provider value={[cartState, cartDispath]}>
            {props.children}
        </CartContext.Provider>
    )

}