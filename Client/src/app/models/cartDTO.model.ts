import { CartItem } from "./cart-item.model";

export interface CartDTO{
    id:string,
    items:CartItem[],
}