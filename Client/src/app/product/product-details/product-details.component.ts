import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsDB } from 'src/app/shared/data/product-overview';
import * as _ from "underscore";

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id:number;
  products = productsDB.ProductOverview;
  product:any;

  constructor(private route: ActivatedRoute) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.getProductById();
  }

  ngOnInit(): void {

  }

  getProductById(){
    if(this.id){
      this.product = _.find(this.products,(item=>{
        return item.id === this.id;
      }))
    }
  }

}
