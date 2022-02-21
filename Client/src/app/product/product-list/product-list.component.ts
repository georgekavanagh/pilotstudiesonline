import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/product-overview';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.ProductOverview;
      this.isLoaded = true
    }, 5000)
  }
}
