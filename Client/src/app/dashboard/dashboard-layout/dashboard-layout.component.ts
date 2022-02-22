import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import * as CartActions from '../../actions/cart.actions';

@Component({
  selector: 'll-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLessThenLargeDevice;
  user:User;
  cart:Product[] = [];
  favourites:Product[] = [];
  cartTotal:number;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private store: Store<AppState>) {
    this.getLoggedInUser();
    this.getUserCart();
    this.getUserFavourites();
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  getLoggedInUser(){
    this.store.select('user').subscribe(latestUser =>{
      if(latestUser && latestUser.length > 0){
        this.user = latestUser[0];
      }else{
        // get user from server by id
        this.user = {
          id:1,
          firstName:'George',
          lastName:'Kavanagh',
          email:'george.kavanagh',
          mobile:'+27725473665',
          dob:'09/04/1995',
          createdDate:'2021-12-23T12:19:39.313Z',
          gender:"male",
          role:"USER",
          courses:[],
          mockExams:[]
        }
      }
      
    })
  }

  getUserCart(){
    this.store.select('cart').subscribe((latestCart:Product[]) =>{
      this.cart = latestCart;
      this.calculateCartTotal();
    });
  }

  calculateCartTotal(){
    this.cartTotal = 0;
    this.cart.forEach(item=>{
      this.cartTotal += Number(item.price);
    })
  }

  removeProductFromCart(product){
    this.store.dispatch(new CartActions.RemoveFromCart(product.id));
  }

  getUserFavourites(){
    this.store.select('favourites').subscribe((latestFavourites:Product[]) =>{
      console.log(latestFavourites)
      this.favourites = latestFavourites;
    });
  }

  onLogout(): void {
    this.router.navigate(['auth/login']);
  }
}
