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

  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CartActions.LoadCart>(CartActions.LOAD_CART),
      switchMap((action) =>
        // Call the getTodos method, convert it to an observable
        from(this.cartService.getCart(action.payload)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((cart) => new CartActions.LoadCartSuccess(cart)),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(new CartActions.LoadCartFailure(error)))
        )
      )
    )
  );
}