import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { cartReducer } from './reducers/cart.reducer';
import { favouritesReducer } from './reducers/favourites.reducer';
import { CartService } from './cart/service/cart.service';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './effects/cart.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule, 
  StoreModule.forRoot({
    user : userReducer,
    cart : cartReducer,
    favourites : favouritesReducer
  }), 
  EffectsModule.forRoot([CartEffects])],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
