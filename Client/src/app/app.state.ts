import { User } from "./models/user.model";
import { Course } from "./models/course.model";
import { MockExam } from "./models/mock-exam.model";
import { Product } from "./models/product.model";

export interface AppState{
    readonly user:User[];
    readonly cart: Product[];
    readonly favourites:Product[];
}