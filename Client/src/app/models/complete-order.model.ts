import { MockExam } from "./mock-exam.model";

export interface CompleteOrder{
    id:number,
    email:string,
    mockExam: MockExam
}