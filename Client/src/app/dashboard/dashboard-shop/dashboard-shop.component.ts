import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { productsDB } from 'src/app/shared/data/products';

@Component({
  selector: 'll-dashboard-shop',
  templateUrl: './dashboard-shop.component.html',
  styleUrls: ['./dashboard-shop.component.scss']
})
export class DashboardShopComponent implements OnInit {
  view = 'list';
  advanceSearchExpanded: boolean = false;
  productTypes:SelectItem[] = [];
  addingToCart: boolean = false

  products;
  constructor() {}

  ngOnInit(): void {
    this.getProductTypes();
    this.products = productsDB.Product;
  }

  getProductTypes(){
    this.productTypes = [
      {label:'Please select',value:null},
      {label:'Course',value:'Course'},
      {label:'Mock Exams',value:'Mock Exams'},
      {label:'Bundle',value:'Bundle'},
    ]
  }

  addProductToCart(){
    this.addingToCart = true;
    setTimeout(()=>{
      this.addingToCart = false;
    },2000)
  }
}
