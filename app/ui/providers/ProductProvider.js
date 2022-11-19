import React, {createContext, useReducer} from "react";

import { initialState, ProductReducer } from "../../data/reducers/ProductReducer";
//import { initialState, ProductReducer } from "../../app/data/reducers/ProductReducer";

export const ProductContext = createContext(initialState);

export default function ProductProviders(props){

    const [productState, productDispath] = useReducer(ProductReducer, initialState)
    return(

        <ProductContext.Provider value={[productState, productDispath]}>
            {props.children}
        </ProductContext.Provider>
    )

}