
import * as FavouritesActions from "../actions/favourites.actions";
import { Product } from "../models/product.model";

export function favouritesReducer(state:Product[] = [],action:FavouritesActions.Actions){
    switch(action.type){
        case FavouritesActions.ADD_TO_FAVOURITES:
            return [...state,action.payload]
        case FavouritesActions.REMOVE_FROM_FAVOURITES:
            return state.filter(product => product.id !== action.payload)
        default:
            return state;
    }
}