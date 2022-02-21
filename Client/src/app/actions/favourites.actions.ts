import { Action } from "@ngrx/store";
import { Product } from "../models/product.model";

export const ADD_TO_FAVOURITES = "[FAVOURITES] Add";
export const REMOVE_FROM_FAVOURITES = "[FAVOURITES] Remove";

export class AddToFavourites implements Action {
    readonly type = ADD_TO_FAVOURITES;
    constructor(public payload: Product){}
}

export class RemoveFromFavourites implements Action {
    readonly type = REMOVE_FROM_FAVOURITES;
    constructor(public payload: number){}
}

export type Actions = AddToFavourites | RemoveFromFavourites;