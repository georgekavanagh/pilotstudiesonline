import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectItem } from 'primeng/api';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/models/product.model';
import { productsDB } from 'src/app/shared/data/products';
import * as CartActions from '../../actions/cart.actions';
import * as FavouritesActions from '../../actions/favourites.actions';
import * as _ from "underscore";
import Swal from 'sweetalert2'

@Component({
  selector: 'll-dashboard-shop',
  templateUrl: './dashboard-shop.component.html',
  styleUrls: ['./dashboard-shop.component.scss']
})
export class DashboardShopComponent implements OnInit {
  view = 'list';
  advanceSearchExpanded: boolean = false;
  productTypes:SelectItem[] = [];
  addingToCart: boolean = false;
  addingToFavourites: boolean = false;
  existingCart:Product[] = [];
  existingFavourites:Product[] = [];
  products;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getProductTypes();
    this.getCartAndFavourites();
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

  getCartAndFavourites(){
    this.store.select('cart').subscribe(latestCart =>{
      this.existingCart = latestCart;
    });
    this.store.select('favourites').subscribe(latestFavourites =>{
      this.existingFavourites = latestFavourites;
    });
  }

  addProductToCart(product:Product){
    //Checks if the product already exists in the cart
    if(_.find(this.existingCart,(item)=>{return item.id === product.id})){
      Swal.fire({
        icon:'warning',
        title: 'Warning',
        text:'Product has already been added to cart',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{
      this.addingToCart = true;
      setTimeout(()=>{
        this.store.dispatch(new CartActions.AddToCart(product));
        this.addingToCart = false;
      },2000)
    }
  }

  addProductToFavourites(product:Product){
    //Checks if the product already exists in the favourites list
    if(_.find(this.existingFavourites,(item)=>{return item.id === product.id})){
      Swal.fire({
        icon:'warning',
        title: 'Warning',
        text:'Product has already been added to your favourites list',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{
      this.addingToFavourites = true;
      setTimeout(()=>{
        this.store.dispatch(new FavouritesActions.AddToFavourites(product));
        this.addingToFavourites = false;
      },2000)
    }
  }
}
