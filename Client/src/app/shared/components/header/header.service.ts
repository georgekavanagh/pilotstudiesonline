import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HeaderService {

  private showHeaderItems = new BehaviorSubject(true);
  shared = this.showHeaderItems.asObservable();

  constructor() { }

  show(showItems: boolean) {
    this.showHeaderItems.next(showItems)
  }
  

}
