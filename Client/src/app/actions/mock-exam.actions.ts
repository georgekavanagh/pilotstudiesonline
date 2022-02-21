import { Action } from "@ngrx/store";
import { MockExam } from "../models/mock-exam.model";

export const ADD_MOCK_EXAM = "[MOCK_EXAM] Add";
export const REMOVE_MOCK_EXAM = "[MOCK_EXAM] Remove";

export class AddMockExam implements Action {
    readonly type = ADD_MOCK_EXAM;
    constructor(public payload: MockExam){}
}

export class RemoveMockExam implements Action {
    readonly type = REMOVE_MOCK_EXAM;
    constructor(public payload: number){}
}

export type Actions = AddMockExam | RemoveMockExam;