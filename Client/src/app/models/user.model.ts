import { Course } from "./course.model";
import { MockExam } from "./mock-exam.model";

export interface User{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    mobile:string,
    createdDate:string,
    gender:string,
    dob:string,
    role:string,
    courses:Course[],
    mockExams:MockExam[]
}