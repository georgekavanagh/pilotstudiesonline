import { Component, OnInit } from '@angular/core';
import { productsDB } from 'src/app/shared/data/product-overview';

@Component({
  selector: 'll-dashboard-shop',
  templateUrl: './dashboard-shop.component.html',
  styleUrls: ['./dashboard-shop.component.scss']
})
export class DashboardShopComponent implements OnInit {
  view = 'list';

  products;
  constructor() {}

  ngOnInit(): void {
    this.products = productsDB.ProductOverview;
  }
}
