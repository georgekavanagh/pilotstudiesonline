import { Question } from "./question.model";

export interface MockExam{
    id:number,
    images:string[],
    name:string,
    description:string,
    questions:Question[],
    examPrice:number,
    bundlePrice:number,
    category:number,
    expiryDate:Date
}