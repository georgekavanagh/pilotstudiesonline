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
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/shared/product.service';

@Component({
  selector: 'll-dashboard-shop',
  templateUrl: './dashboard-shop.component.html',
  styleUrls: ['./dashboard-shop.component.scss']
})
export class DashboardShopComponent implements OnInit {
  view = 'list';
  advanceSearchExpanded: boolean = false;
  gettingProducts: boolean = false;
  productTypes:SelectItem[] = [];
  existingCart:Cart;
  products;
  status$:Observable<Cart>;
  constructor(private store: Store<AppState>,private productService:ProductService) {
    this.status$ = this.store.select('cart');
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getProductTypes();
    this.getCartAndFavourites();
  }

  getAllProducts(){
    this.gettingProducts = true;
    setTimeout(()=>{
      this.productService.getAllProducts().subscribe((products:Product[])=>{
        this.products = this.getActivatedProducts(products);
        this.gettingProducts = false;
      },error=>{
        this.products = [];
        this.gettingProducts = false;
      })
    },2000)
  }

  getActivatedProducts(productList:Product[]){
    return _.filter(productList,(item)=>{
      return item.activated
    })
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
    this.store.select('cart').subscribe((latestCart:Cart) =>{
      this.existingCart = latestCart;
      if(latestCart.status == 'error adding to cart'){
        Swal.fire(
          'Failure',
          'The product failed to be added to the cart',
          'error'
        )
      }
    });
  }

  addProductToCart(product:Product){
    let cartItem:CartItem = {
      id:product.id,
      productName:product.name,
      productType:product.type,
      price:product.price,
      image:product.image
    }
    //Checks if the product already exists in the cart
    if(_.find(this.existingCart.items,(item)=>{return item.id === product.id})){
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
      this.store.dispatch(new CartActions.AddToCart(cartItem));
    }
  }
}
