
import * as CourseActions from "../actions/course.actions";
import { Course } from "../models/course.model";

export function courseReducer(state:Course[],action:CourseActions.Actions){
    switch(action.type){
        case CourseActions.ADD_COURSE:
            return [...state,action.payload]
        default:
            return state;
    }
}