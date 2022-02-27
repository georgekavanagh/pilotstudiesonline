import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartDTO } from 'src/app/models/cartDTO.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardOrderService {

  constructor(private http:HttpClient) { }

  getUserOrders() {
    return this.http.get(`${environment.BASE_API_URL}/api/orders`);
  }

  cancelOrder(orderId:any) {
    return this.http.put(`${environment.BASE_API_URL}/api/orders/cancel`,orderId);
  }

  
}
