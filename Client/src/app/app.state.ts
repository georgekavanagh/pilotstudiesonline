import { User } from "./models/user.model";
import { Course } from "./models/course.model";
import { MockExam } from "./models/mock-exam.model";

export interface AppState{
    readonly user:User[];
    readonly courses: Course[];
    readonly mockExams: MockExam[];
    readonly favourites:[Course, MockExam];
    readonly basket:any[];
}