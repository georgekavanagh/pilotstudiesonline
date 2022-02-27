import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import * as CartActions from '../../actions/cart.actions';
import Swal from 'sweetalert2'

@Component({
  selector: 'll-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLessThenLargeDevice;
  user:User;
  cart$:Observable<Cart>;
  favourites$:Observable<Product[]>

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private store: Store<AppState>) {
    this.cart$ = this.store.select('cart');
    this.getCart();
    this.getLoggedInUser();
    this.showCartErrorMsgs()
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  getCart(){
    this.store.dispatch(new CartActions.LoadCart('george.kavanagh16@gmail.com'));
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

  calculateCartTotal(cart:Cart):string{
    let cartTotal = 0;
    cart.items.forEach(item=>{
      cartTotal += Number(item.price);
    });
    return "R " +cartTotal;
  }

  removeProductFromCart(product){
    this.store.dispatch(new CartActions.RemoveFromCart(product));
  }

  onLogout(): void {
    this.router.navigate(['auth/login']);
  }

  routeToCheckout(): void {
    this.router.navigate(['/dashboard/checkout']);
  }

  showCartErrorMsgs(){
    this.store.select('cart').subscribe((latestCart:Cart) =>{
      if(latestCart.status == 'error removing from cart'){
        Swal.fire(
          'Failure',
          'The product failed to be removed from the cart',
          'error'
        )
      }
    });
  }
}
