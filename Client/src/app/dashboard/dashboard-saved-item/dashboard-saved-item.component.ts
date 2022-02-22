import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'll-dashboard-saved-item',
  templateUrl: './dashboard-saved-item.component.html',
  styleUrls: ['./dashboard-saved-item.component.scss']
})
export class DashboardSavedItemComponent implements OnInit {
  favourites:Product[] = [];
  constructor(private store: Store<AppState>) {
    this.getFavourites()
  }

  getFavourites(){
    this.store.select('favourites').subscribe(latestFavourites =>{
      this.favourites = latestFavourites;
    });
  }

  ngOnInit(): void {
  }
}
