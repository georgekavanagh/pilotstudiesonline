import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as CartActions from "../actions/cart.actions";
import { AppState } from '../app.state';
import { CartService } from '../cart/service/cart.service';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  // Run this code when a loadCart action is dispatched
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CartActions.LoadCart>(CartActions.LOAD_CART),
      switchMap((action) =>
        from(this.cartService.getCart(action.payload)).pipe(
          map((cart) => new CartActions.LoadCartSuccess(cart)),
          catchError((error) => of(new CartActions.LoadCartFailure(error)))
        )
      )
    )
  );

  saveToCart$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType<CartActions.AddToCart>(CartActions.ADD_TO_CART),
      switchMap(action =>
        of(action).pipe(
          withLatestFrom(
            this.store.select('cart')
          ),
          switchMap(([action, latest]) => {
            return from((this.cartService.saveCart(latest)).pipe(
              map((cart) => new CartActions.AddToCartSuccess(cart)),
              catchError((error) => of(new CartActions.AddToCartFailure(action.payload.id)))
            ));
          })
        )
      )
    )
  );

  removeFromCart$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType<CartActions.RemoveFromCart>(CartActions.REMOVE_FROM_CART),
      switchMap(action =>
        of(action).pipe(
          withLatestFrom(
            this.store.select('cart')
          ),
          switchMap(([action, latest]) => {
            return from((this.cartService.saveCart(latest)).pipe(
              map((cart) => new CartActions.RemoveFromCartSuccess(cart)),
              catchError((error) => of(new CartActions.RemoveFromCartFailure(action.payload)))
            ));
          })
        )
      )
    )
  );
}

// from(
          


        // this.actions$.pipe(
        //   ofType<CartActions.AddToCart>(CartActions.ADD_TO_CART),
        //   withLatestFrom(this.store.select('cart')),
        //   map(([first, second])=>{
            
        //   })
          
        
        // ),