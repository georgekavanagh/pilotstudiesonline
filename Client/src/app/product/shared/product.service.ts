import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartDTO } from 'src/app/models/cartDTO.model';
import { Product } from 'src/app/models/product.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.BASE_API_URL}/api/products`);
  }
}
