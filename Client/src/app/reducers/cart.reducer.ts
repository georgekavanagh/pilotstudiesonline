
import * as CartActions from "../actions/cart.actions";
import { Product } from "../models/product.model";

export function cartReducer(state:Product[],action:CartActions.Actions){
    switch(action.type){
        case CartActions.ADD_TO_CART:
            return [...state,action.payload]
        default:
            return state;
    }
}