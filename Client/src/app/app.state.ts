import { User } from "./models/user.model";
import { Course } from "./models/course.model";
import { MockExam } from "./models/mock-exam.model";
import { Product } from "./models/product.model";
import { Cart } from "./models/cart.model";

export interface AppState{
    readonly user:User[];
    readonly cart: Cart;
}