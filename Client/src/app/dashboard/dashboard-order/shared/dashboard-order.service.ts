import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartDTO } from 'src/app/models/cartDTO.model';
import { CompleteOrder } from 'src/app/models/complete-order.model';

import { environment } from 'src/environments/environment';
import { PaymentReceived } from './payment-recieved.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardOrderService {

  constructor(private http:HttpClient) { }

  getUserOrders() {
    return this.http.get(`${environment.BASE_API_URL}/api/orders`);
  }

  getUserOrderById(id:number){
    return this.http.get(`${environment.BASE_API_URL}/api/orders/${id}`);
  }

  cancelOrder(orderId:any) {
    return this.http.put(`${environment.BASE_API_URL}/api/orders/cancel`,orderId);
  }

  orderPaymentReceived(paymentReceivedObj:PaymentReceived) {
    return this.http.put(`${environment.BASE_API_URL}/api/orders/payment-recieved`,paymentReceivedObj);
  }

  completeOrder(completedOrderObjs:CompleteOrder[]) {
    return this.http.post(`${environment.BASE_API_URL}/api/orders/complete`,completedOrderObjs);
  }

  getOrdersReadyForCompletion(pagingURIString) {
    return this.http.get(`${environment.BASE_API_URL}/api/orders/ready-for-completion${pagingURIString}`);
  }

  getCompletedOrders(pagingURIString) {
    return this.http.get(`${environment.BASE_API_URL}/api/orders/completed-orders${pagingURIString}`);
  }

}
