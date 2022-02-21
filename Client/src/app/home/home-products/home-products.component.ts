import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/product-overview';
@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  products = [];
  constructor() {
    this.getShortenedProductList();
  }

  getShortenedProductList() {
    productsDB.ProductOverview.forEach((item, index) => {
      if (index <= 5) {
        this.products.push(item);
      }
    });
  }

  ngOnInit(): void {}
}
