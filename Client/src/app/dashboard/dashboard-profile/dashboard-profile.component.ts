import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {
  user:User;

  constructor(private store: Store<AppState>) { 
    this.getLoggedInUser();
  }

  ngOnInit(): void {
    
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
          role:"USER"
        }
      }
    })
  }

  

}
