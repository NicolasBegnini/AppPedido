import { CART_ADD_PRODUCT, CART_CLEAR, CART_REMOVE_PRODUCT} from "../actions/CartActions";

export const initialState = {

    product: []
}

export const CartReducer = (store = initialState, action) => {

    switch (action.type) {

        case CART_ADD_PRODUCT:
            
            return {...store, product: [...store.product, action.value]} 


        case CART_REMOVE_PRODUCT:

            return {...store, product: store.product.filter(item => item.id !== action.value.id)}         
            

        case CART_CLEAR:

            return {...store, product: []};

            
        default:

            return store;

    }
}