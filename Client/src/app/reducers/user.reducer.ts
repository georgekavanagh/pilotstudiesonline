import { User } from "../models/user.model";
import * as UserActions from "../actions/user.actions";

export function userReducer(state:User[],action:UserActions.Actions){
    switch(action.type){
        case UserActions.ADD_USER:
            if(state){
                return [...state,action.payload]
            }else{
                return [action.payload]
            }
        default:
            return state;
    }
}