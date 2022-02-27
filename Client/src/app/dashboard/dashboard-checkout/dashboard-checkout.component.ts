import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { MenuItem } from "primeng/api";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";
import { Cart } from "src/app/models/cart.model";
import * as CartActions from '../../actions/cart.actions';
import { CheckoutService } from "./checkout.service";
import Swal from 'sweetalert2'

@Component({
    selector: 'checkout',
    templateUrl: './dashboard-checkout.component.html',
    styleUrls: ['./dashboard-checkout.component.scss']
  })
  export class DashboardCheckoutComponent {
    stepperItems: MenuItem[];
    activeIndex:number = 0;
    cart$:Observable<Cart>;
    placingOrder:boolean = false;
    isOrderPlaced:boolean = false;
    isPaymentComplete:boolean = false;

    constructor(private store: Store<AppState>,private router: Router,
      private checkoutService:CheckoutService){
      this.cart$ = this.store.select('cart');
      this.initStepperItems();
    }

    initStepperItems(){
      this.stepperItems = [
        {label: 'Cart',routerLink: 'cart'},
        {label: 'Payment',routerLink: 'payment'},
        {label: 'Confirmation',routerLink: 'confirmation'}
    ];
    }

    removeProductFromCart(product){
      this.store.dispatch(new CartActions.RemoveFromCart(product));
    }

    calculateCartTotal(cart:Cart):string{
      if(cart){
        let cartTotal = 0;
        cart.items.forEach(item=>{
          cartTotal += Number(item.price);
        });
        return "R " +cartTotal;
      }
      return "R 0";
    }

    placeOrderBtnClicked(cartObj){
      this.placingOrder = true;
      setTimeout(()=>{
        let basketIdObj = {basketId:cartObj.id};
        this.checkoutService.createOrder(basketIdObj).subscribe(res=>{
          this.store.dispatch(new CartActions.EmptyOutCart())
          this.placingOrder = false;
          this.isOrderPlaced = true;
        },error=>{
          this.placingOrder = false;
          Swal.fire(
            'Error',
            (error.message)?error.message:'There was a problem placing your order, please try again.',
            'error'
          )
        })
      },2000)
    }
  }