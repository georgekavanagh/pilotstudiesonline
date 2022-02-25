import { Action } from "@ngrx/store";
import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";

export const ADD_TO_CART = "[CART] Add";
export const REMOVE_FROM_CART = "[CART] Remove";
export const LOAD_CART = "[CART] Load Cart";
export const LOAD_CART_SUCCESS = "[CART] Load Cart Success";
export const LOAD_CART_FAILURE = "[CART] Load Cart Failure";

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public payload: CartItem){}
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor(public payload: number){}
}

export class LoadCart implements Action {
    readonly type = LOAD_CART;
    constructor(public payload: string){}
}

export class LoadCartSuccess implements Action {
    readonly type = LOAD_CART_SUCCESS;
    constructor(public payload: Cart){}
}

export class LoadCartFailure implements Action {
    readonly type = LOAD_CART_FAILURE;
    constructor(public payload: string){}
}

export type Actions = AddToCart | RemoveFromCart | LoadCart | LoadCartSuccess | LoadCartFailure;