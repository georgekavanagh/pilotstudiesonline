import { Action } from "@ngrx/store";
import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";
import { CartDTO } from "../models/cartDTO.model";

export const EMPTY_CART = "[CART] Empty out cart";
export const ADD_TO_CART = "[CART] Add";
export const ADD_TO_CART_SUCCESS = "[CART] Add To Cart Success";
export const ADD_TO_CART_FAILURE = "[CART] Add To Cart Failure";

export const REMOVE_FROM_CART = "[CART] Remove";
export const REMOVE_FROM_CART_SUCCESS = "[CART] Remove from Cart Success";
export const REMOVE_FROM_CART_FAILURE = "[CART] Remove from Cart Failure";

export const LOAD_CART = "[CART] Load Cart";
export const LOAD_CART_SUCCESS = "[CART] Load Cart Success";
export const LOAD_CART_FAILURE = "[CART] Load Cart Failure";

export class EmptyOutCart implements Action {
    readonly type = EMPTY_CART;
    constructor(){}
}
export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public payload: CartItem){}
}
export class AddToCartSuccess implements Action {
    readonly type = ADD_TO_CART_SUCCESS;
    constructor(public payload: CartDTO){}
}
export class AddToCartFailure implements Action {
    readonly type = ADD_TO_CART_FAILURE;
    constructor(public payload: number){}
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor(public payload: CartItem){}
}

export class RemoveFromCartSuccess implements Action {
    readonly type = REMOVE_FROM_CART_SUCCESS;
    constructor(public payload: CartDTO){}
}

export class RemoveFromCartFailure implements Action {
    readonly type = REMOVE_FROM_CART_FAILURE;
    constructor(public payload: CartItem){}
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

export type Actions = EmptyOutCart | AddToCart | AddToCartSuccess | AddToCartFailure | RemoveFromCart |
RemoveFromCartSuccess | RemoveFromCartFailure | LoadCart | LoadCartSuccess | LoadCartFailure;