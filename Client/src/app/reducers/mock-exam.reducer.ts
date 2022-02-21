
import * as MockExamActions from "../actions/mock-exam.actions";
import { MockExam } from "../models/mock-exam.model";

export function mockExamReducer(state:MockExam[],action:MockExamActions.Actions){
    switch(action.type){
        case MockExamActions.ADD_MOCK_EXAM:
            return [...state,action.payload]
        default:
            return state;
    }
}