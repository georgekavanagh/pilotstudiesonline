
import * as CartActions from "../actions/cart.actions";
import { Cart } from "../models/cart.model";
import { Product } from "../models/product.model";

export const initialState:Cart = {
     id:null,
     items:[],
     status:'pending',
     error:null
}

export function cartReducer(state:Cart = initialState,action:CartActions.Actions){
    switch(action.type){
        case CartActions.EMPTY_CART:
            return {
                ...state,
                items: [],
                error: null,
                status:'pending'
            }
        case CartActions.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items,action.payload],
                status:'adding to cart'
            }
        case CartActions.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                status: 'success',
                error: null
            } 
        case CartActions.ADD_TO_CART_FAILURE:
            return {
                ...state, 
                items: state.items.filter(item => item.id !== action.payload),
                status:'error adding to cart',
                error: 'error'
            }   
        case CartActions.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case CartActions.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                status: 'success',
                error: null
            } 
        case CartActions.REMOVE_FROM_CART_FAILURE:
            return {
                ...state, 
                items: [...state.items,action.payload],
                status:'error removing from cart',
                error: 'error'
            }   
        case CartActions.LOAD_CART:
            return {
                ...state, status:'loading'
            }
        case CartActions.LOAD_CART_SUCCESS:
            return {
                ...state, 
                items:action.payload.items,
                id:action.payload.id,
                status:'success',
                error:null
            }
        case CartActions.LOAD_CART_FAILURE:
            return {
                ...state, 
                status:'error',
                error: action.payload
            }
        default:
            return state;
    }
}