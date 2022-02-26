import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartDTO } from 'src/app/models/cartDTO.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  getCart(id:string):Observable<Cart>{
    return this.httpClient.get<Cart>(`${environment.BASE_API_URL}/api/basket?id=${id}`);
  }

  saveCart(cart:CartDTO):Observable<CartDTO>{
    return this.httpClient.post<Cart>(`${environment.BASE_API_URL}/api/basket`,cart);
  }

  deleteCart(id:string):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${environment.BASE_API_URL}/api/basket?id=${id}`);
  }
}
