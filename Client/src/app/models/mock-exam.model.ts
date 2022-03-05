import { Question } from "./question.model";
import { User } from "./user.model";

export interface MockExam{
    id:number,
    userId:string
    name:string,
    image:string,
    category:string,
    expiry:Date,
    activationDate:Date,
    activated:boolean
}